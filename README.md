# NOVA — AI SaaS Dashboard

A modern AI-powered workspace designed to bring multiple productivity tools together in one place. NOVA provides a clean dashboard experience for accessing AI tools, managing generated content, and organizing everyday tasks.

## Overview

NOVA is a full-stack AI SaaS dashboard project built with React, TypeScript, and Node.js. It aims to provide a unified interface for AI-assisted chat, code generation, content creation, and productivity workflows.

## Features

- **Modern Landing Page** — Responsive marketing interface with product information and navigation.
- **Authentication** — Login and signup interfaces with support for backend authentication.
- **Interactive Dashboard** — Central workspace for accessing tools and reviewing activity.
- **AI Chat Assistant** — Interface for conversational AI.
- **AI Code Generator** — Designed to assist with programming tasks.
- **Content Generation Tools** — Interfaces for summarizing text, writing emails, and creating blog content.
- **AI Image Generator** — Interface for image-generation workflows.
- **Generation History** — Intended for managing previously generated content.
- **Responsive Design** — Layout designed for desktop, tablet, and mobile devices.
- **Reusable Components** — Modular UI components for maintainability.

Feature availability depends on the current implementation and external API configuration.

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React

### Backend
- Node.js
- Express
- TypeScript

### Planned or configurable integrations
- MongoDB
- AI provider APIs
- Secure authentication

## Project Structure

```text
Ai-Saas-Dashboard/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   │   ├── app-shell/
│   │   ├── marketing/
│   │   └── ui/
│   ├── features/
│   │   ├── ai-tools/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── marketing/
│   ├── lib/
│   ├── store/
│   ├── index.css
│   └── main.tsx
├── server/
│   └── src/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

Install the following:
- Node.js
- npm
- Git

### 1. Clone the repository

```zsh
git clone https://github.com/dishanthjain/Ai-Saas-Dashboard.git
cd Ai-Saas-Dashboard
```

### 2. Install frontend dependencies

```zsh
npm install
```

### 3. Configure environment variables

Create your local environment file using the example:

```zsh
cp .env.example .env
```

Add the required configuration values. Never commit API keys, passwords, or other secrets.

### 4. Start the frontend

```zsh
npm run dev
```

Open the local URL printed in your terminal, usually `http://localhost:5173`.

### 5. Start the backend

If the backend has its own package configuration, open a second terminal:

```zsh
cd server
npm install
```

Configure the backend environment using its `.env.example` file, then use the development script defined in `server/package.json`.

Backend startup requires the necessary environment variables and services to be configured.

## Environment Configuration

Depending on the implemented features, configuration may include:

| Variable | Purpose |
|---|---|
| `VITE_API_URL` | Frontend API base URL |
| `PORT` | Backend server port |
| `MONGODB_URI` | MongoDB connection string |
| `AI_PROVIDER_API_KEY` | AI provider credential |

Use the exact variable names required by the application. Do not expose backend secrets through frontend environment variables.

## Development

Start the frontend:

```zsh
npm run dev
```

Build the frontend:

```zsh
npm run build
```

Preview the production build:

```zsh
npm run preview
```

Run the backend using the scripts defined in its package configuration.

## Security

- Keep secret credentials in local environment files.
- Exclude `.env` files from Git.
- Validate user input on the server.
- Protect private routes and user-specific data.
- Never expose AI provider credentials in browser code.

## Deployment

The frontend can be deployed to platforms such as Vercel or Netlify. The backend requires a compatible Node.js hosting service if it is deployed separately.

Configure production environment variables, API URLs, database access, and CORS settings before deployment.

## Project Goals

NOVA aims to make AI-assisted productivity more accessible through a unified, intuitive workspace. The project focuses on usability, modular architecture, responsive design, and the integration of AI-powered workflows.

## Author

**Dishanth Jain**

- GitHub: [@dishanthjain](https://github.com/dishanthjain)


