# hfg.design 2.0 Documentation

Welcome to the comprehensive documentation for **hfg.design 2.0** - an intelligent teaching and learning platform that combines modern web technologies with AI-powered content analysis for innovative educational environments.

## 📖 Documentation Overview

### 🏛️ Architecture

**[Architecture Overview](/docs/development/architecture/)** - Complete system architecture and service integration

**Core Services:**

- **[UI](/docs/development/architecture/ui)** - Vue.js frontend application with space-based collaboration
- **[API](/docs/development/architecture/api)** - Express.js REST API with Socket.io real-time updates
- **[MongoDB](/docs/development/architecture/mongodb)** - Central NoSQL database for application data
- **[MinIO](/docs/development/architecture/minio)** - S3-compatible object storage for media files
- **[Matrix Synapse](/docs/development/architecture/synapse)** - End-to-end encrypted chat backend
- **[LiveKit](/docs/development/architecture/livekit)** - WebRTC platform for live streaming and screen sharing
- **[Keycloak](/docs/development/architecture/keycloak)** - Identity and access management system
- **[AI-Agents](/docs/development/architecture/ai)** - Specialized agents for automated stream analysis

### 🎯 Key Features

- **Intelligent Live Streaming**: AI-powered analysis of lecture streams with automatic slide recognition
- **Real-time Collaboration**: Chat integration with live commenting on presentation slides
- **Space-based Architecture**: Flexible workspaces (COURSE, CHANNEL, DM, PROJECT_GROUP, etc.)
- **Advanced Authentication**: Multi-client support for UI users and backend services
- **AI Content Analysis**: OCR text recognition, object detection, and LLM-based summarization

### 👥 User Guides

**[User Guide](/docs/userguide/)** - How to use the hfg.design 2.0 platform

- **[Quick Start](/docs/userguide/quickstart)** - Getting started with the platform

### 🚀 Hosting & Deployment

**[Hosting Guides](/docs/hosting/)** - Server setup and deployment instructions

- **[Quick Start](/docs/hosting/quickstart)** - Basic deployment setup

### 🎨 Design System

**[Design Documentation](/docs/design/)** - Visual design guidelines and components

- **[Colors](/docs/design/colors)** - Color palette and theming system

### ⚙️ System Permissions

**[Permissions System](/docs/permissions)** - User roles and access control

## 🏗️ Technology Stack

- **Frontend**: Vue.js with Nuxt.js
- **Backend**: Express.js REST API with Socket.io
- **Database**: MongoDB with Typegoose
- **Storage**: MinIO S3-compatible
- **Streaming**: LiveKit WebRTC
- **Chat**: Matrix Synapse
- **Authentication**: Keycloak OpenID Connect
- **AI**: Self-hosted models on NVIDIA Tesla

## 🔄 Data Flow

1. **Live Streams** are transmitted via LiveKit
2. **AI Agents** analyze content in real-time and create screenshots
3. **Media** is stored in MinIO, **metadata** in MongoDB
4. **OCR and YOLO results** are embedded directly in slide documents
5. **Real-time updates** synchronize all changes via API to UI clients
6. **Chat integration** enables discussions parallel to streams
7. **Highlight system** allows persistent markings on slides

## 🤖 AI Integration

The platform features six specialized AI agents:

- **Agent-Coordinator**: Central control of all AI processes
- **Agent-Slidechange**: Automatic detection of slide changes
- **Agent-OCR**: Text recognition with bounding box coordinates
- **Agent-YOLO**: Object recognition on lecture slides
- **Agent-Summarize**: LLM-based content summarization
- **Agent-STT**: Speech-to-text for accessibility

## 🚀 Quick Start

This documentation site is built with Nuxt.js and provides detailed information about the hfg.design 2.0 platform architecture, development guides, and user documentation.

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm dev

# Build for production
npm build
```

## 📁 Project Structure

```bash
hfgd-docs/
├── docs/                    # Documentation content
│   ├── development/         # Development documentation
│   │   └── architecture/    # System architecture docs
│   ├── userguide/          # User guides
│   ├── hosting/            # Deployment guides
│   └── design/             # Design system docs
├── components/             # Vue.js components
├── layouts/               # Nuxt.js layouts
├── pages/                 # Dynamic pages
├── assets/               # SCSS styles and assets
└── public/              # Static files
```

## 🌐 Live Documentation

Visit the live documentation at: https://hfgd20.github.io/docs/

## 📧 Contact & Support

For questions about the hfg.design 2.0 platform or this documentation, please contact the development team.

> the base of these docs is a fork of the [OpenWebUI Docs](https://github.com/open-webui/docs)