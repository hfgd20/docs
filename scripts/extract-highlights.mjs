#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../docs');
const OUTPUT_FILE = path.join(DOCS_DIR, '00-highlights/index.md');
const BASE_URL = '/docs';

// Highlight colors to search for
const HIGHLIGHT_COLORS = {
  yellow: { name: 'Gelb', emoji: '🟨', description: 'Design' },
  cyan: { name: 'Cyan', emoji: '🟦', description: 'Dev' },
  orange: { name: 'Orange', emoji: '🟧', description: 'Generell' },
  lightgreen: { name: 'Hellgrün', emoji: '🟩', description: 'Branding' },
};

// Pattern to match <span style={{backgroundColor: 'COLOR'}}>content</span>
function getHighlightPattern() {
  const colors = Object.keys(HIGHLIGHT_COLORS).join('|');
  return new RegExp(`<span\\s+style={{backgroundColor:\\s*['"](?:${colors})['"]}}>([^<]*(?:<[^>]+>[^<]*)*?)<\\/span>`, 'gi');
}

/**
 * Recursively find all markdown files in a directory
 */
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip the highlights directory to avoid processing the output file
      if (!filePath.includes('00-highlights')) {
        findMarkdownFiles(filePath, fileList);
      }
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Extract front matter from markdown content
 */
function extractFrontMatter(content) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontMatterRegex);
  
  if (!match) return null;
  
  const frontMatter = {};
  const lines = match[1].split('\n');
  
  lines.forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      frontMatter[key] = value;
    }
  });
  
  return frontMatter;
}

/**
 * Extract context around highlighted text (3 words before and after)
 */
function extractContext(line, highlightedText, matchIndex) {
  // Get text before the highlight
  const beforeText = line.substring(0, matchIndex);
  const beforeWords = beforeText.trim().split(/\s+/).filter(w => w.length > 0);
  const contextBefore = beforeWords.slice(-3).join(' ');
  
  // Get text after the highlight (need to find end of the span tag)
  const afterStart = matchIndex + line.substring(matchIndex).indexOf('</span>') + 7;
  const afterText = line.substring(afterStart);
  const afterWords = afterText.trim().split(/\s+/).filter(w => w.length > 0);
  const contextAfter = afterWords.slice(0, 3).join(' ');
  
  // Build the context string
  let contextString = '';
  if (contextBefore) {
    contextString += '... ' + contextBefore + ' ';
  }
  contextString += highlightedText;
  if (contextAfter) {
    contextString += ' ' + contextAfter + ' ...';
  }
  
  return contextString;
}

/**
 * Find the nearest heading before a given line number
 */
function findNearestHeading(lines, lineNumber) {
  // Search backwards from the line to find the nearest heading
  for (let i = lineNumber - 1; i >= 0; i--) {
    const line = lines[i].trim();
    const headingMatch = line.match(/^#{1,6}\s+(.+)$/);
    if (headingMatch) {
      const headingText = headingMatch[1]
        .replace(/[^\w\s-]/g, '') // Remove special chars except word chars, spaces, hyphens
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-'); // Replace spaces with hyphens
      return headingText;
    }
  }
  return null;
}

/**
 * Extract highlights from a markdown file
 */
function extractHighlights(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const highlights = [];
  
  // Extract front matter for context
  const frontMatter = extractFrontMatter(content);
  const title = frontMatter?.title || path.basename(filePath, '.md');
  
  // Split content into lines for line number tracking
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    
    // Check for each color
    Object.keys(HIGHLIGHT_COLORS).forEach((color) => {
      const colorPattern = new RegExp(
        `<span\\s+style={{backgroundColor:\\s*['"]${color}['"]}}>([^<]*(?:<[^>]+>[^<]*)*?)<\\/span>`,
        'gi'
      );
      
      let match;
      while ((match = colorPattern.exec(line)) !== null) {
        const highlightedText = match[1];
        const heading = findNearestHeading(lines, lineNumber);
        const context = extractContext(line, highlightedText, match.index);
        
        highlights.push({
          text: highlightedText,
          context,
          lineNumber,
          title,
          heading,
          color,
        });
      }
    });
  });
  
  return highlights;
}

/**
 * Convert absolute file path to relative doc path for linking
 */
function getDocPath(filePath) {
  const relativePath = path.relative(DOCS_DIR, filePath);
  // Remove .md extension and convert to URL path
  let docPath = relativePath.replace(/\.md$/, '').replace(/\\/g, '/');
  
  // Remove numbered prefixes (e.g., 01-, 02-, 03-) from path segments
  docPath = docPath.split('/').map(segment => {
    return segment.replace(/^\d{2}-/, '');
  }).join('/');
  
  // Handle index files
  if (docPath.endsWith('/index')) {
    return docPath.replace(/\/index$/, '');
  }
  
  return docPath;
}

/**
 * Generate the highlights markdown file
 */
function generateHighlightsFile(highlightsByFile) {
  let markdown = `---
sidebar_position: 0
title: Highlights & Markierungen
hide_title: false
---

# Highlights & Markierungen

Diese Seite listet alle markierten Textstellen aus der gesamten Dokumentation auf.

`;

  // Group highlights by color
  const highlightsByColor = {};
  Object.keys(HIGHLIGHT_COLORS).forEach((color) => {
    highlightsByColor[color] = [];
  });

  // Organize highlights by color
  Object.entries(highlightsByFile).forEach(([filePath, data]) => {
    data.highlights.forEach((highlight) => {
      highlightsByColor[highlight.color].push({
        ...highlight,
        filePath,
        docPath: getDocPath(filePath),
        docTitle: data.title,
      });
    });
  });

  // Generate sections for each color
  Object.entries(HIGHLIGHT_COLORS).forEach(([color, colorInfo]) => {
    const colorHighlights = highlightsByColor[color];
    
    if (colorHighlights.length === 0) return;

    markdown += `---

## ${colorInfo.emoji} ${colorInfo.name} (${colorHighlights.length})

_${colorInfo.description}_

`;

    // Group by document
    const byDocument = {};
    colorHighlights.forEach((h) => {
      if (!byDocument[h.filePath]) {
        byDocument[h.filePath] = {
          title: h.docTitle,
          docPath: h.docPath,
          highlights: [],
        };
      }
      byDocument[h.filePath].highlights.push(h);
    });

    Object.entries(byDocument).forEach(([filePath, data]) => {
      const docUrl = `${BASE_URL}/${data.docPath}`;
      
      markdown += `### ${data.title}\n\n`;
      markdown += `📄 [${path.relative(DOCS_DIR, filePath)}](${docUrl})\n\n`;

      data.highlights.forEach((highlight, index) => {
        const anchor = highlight.heading ? `#${highlight.heading}` : '';
        markdown += `${index + 1}. **Zeile ${highlight.lineNumber}**: "${highlight.context}"\n`;
        markdown += `   → [Zur Stelle springen](${docUrl}${anchor})\n\n`;
      });

      markdown += `\n`;
    });
  });

  // Add summary at the end
  markdown += `---

## 📊 Zusammenfassung

`;

  const totalHighlights = Object.values(highlightsByColor).reduce((sum, arr) => sum + arr.length, 0);
  const totalFiles = new Set(
    Object.values(highlightsByColor).flatMap((arr) => arr.map((h) => h.filePath))
  ).size;

  markdown += `Insgesamt **${totalHighlights} markierte Stellen** in **${totalFiles} Dokumenten** gefunden.\n\n`;

  Object.entries(HIGHLIGHT_COLORS).forEach(([color, colorInfo]) => {
    const count = highlightsByColor[color].length;
    if (count > 0) {
      markdown += `- ${colorInfo.emoji} **${colorInfo.name}**: ${count} Stellen\n`;
    }
  });

  markdown += `\n_Diese Datei wurde automatisch generiert am ${new Date().toLocaleDateString('de-DE', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })}_\n`;

  return markdown;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Scanning for highlighted text in markdown files...\n');

  const markdownFiles = findMarkdownFiles(DOCS_DIR);
  console.log(`Found ${markdownFiles.length} markdown files\n`);

  const highlightsByFile = {};

  markdownFiles.forEach((filePath) => {
    const highlights = extractHighlights(filePath);
    
    if (highlights.length > 0) {
      const relativePath = path.relative(DOCS_DIR, filePath);
      console.log(`✓ ${relativePath}: ${highlights.length} highlight(s)`);
      
      highlightsByFile[filePath] = {
        title: highlights[0].title,
        highlights,
      };
    }
  });

  console.log(`\n📊 Total highlights found: ${Object.values(highlightsByFile).reduce((sum, data) => sum + data.highlights.length, 0)}\n`);

  // Create output directory if it doesn't exist
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`✓ Created directory: ${path.relative(path.join(__dirname, '..'), outputDir)}`);
  }

  // Generate and write the markdown file
  const markdown = generateHighlightsFile(highlightsByFile);
  fs.writeFileSync(OUTPUT_FILE, markdown, 'utf-8');

  console.log(`✓ Generated: ${path.relative(path.join(__dirname, '..'), OUTPUT_FILE)}`);
  console.log('\n✨ Done!\n');
}

main();
