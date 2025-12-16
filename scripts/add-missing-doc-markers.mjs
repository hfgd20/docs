#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../docs');

function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !filePath.includes('00-highlights')) {
      findMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const newLines = [];
  let modified = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);

    // Check if this is a heading
    const headingMatch = line.match(/^(#{1,6})\s+(.+?)(\s+🚧)?$/);
    if (headingMatch && i < lines.length - 1) {
      const nextLine = lines[i + 1];
      const lineAfterNext = i + 2 < lines.length ? lines[i + 2] : '';
      
      // Check if next line is empty and line after that is either:
      // - another heading
      // - another empty line
      // - end of file
      if (nextLine.trim() === '' && 
          (lineAfterNext.match(/^#{1,6}\s+/) || lineAfterNext.trim() === '' || i + 2 >= lines.length)) {
        
        // Skip if there's already a marker
        if (!lineAfterNext.includes('style={{backgroundColor:') && 
            !lineAfterNext.includes('noch nicht implementiert') &&
            !lineAfterNext.includes('fehlt noch')) {
          
          newLines.push('');
          newLines.push('<span style={{backgroundColor: \'magenta\'}}>Hier fehlt noch Dokumentation oder Text.</span>');
          modified = true;
          console.log(`✓ Added marker to: ${path.relative(DOCS_DIR, filePath)} at line ${i + 1}: ${headingMatch[2]}`);
        }
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
  }
  
  return modified;
}

function main() {
  console.log('�� Scanning for empty sections...\n');
  const files = findMarkdownFiles(DOCS_DIR);
  let totalModified = 0;

  files.forEach((file) => {
    if (processFile(file)) {
      totalModified++;
    }
  });

  console.log(`\n✨ Done! Modified ${totalModified} file(s).`);
}

main();
