# Recipes Web Application

This is the web application for the Recipes project, built with React, TypeScript, and Vite.

## Features

- Modern React development with TypeScript
- Responsive design using Tailwind CSS
- Internationalization support (English and Spanish)
- GraphQL integration with Apollo Client
- Client-side routing with React Router
- ESLint and TypeScript for code quality

## Getting Started

### Prerequisites

- Node.js (version specified in `package.json`)
- pnpm (version 11.1.2 or higher)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your GraphQL API credentials

3. Start the development server:
```bash
pnpm dev
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

## Project Structure

```
src/
├── components/     # Reusable UI components
├── lib/           # Libraries and utilities
├── i18n/          # Internationalization files
└── App.tsx        # Main application component
```

## Development Guidelines

- Follow TypeScript best practices
- Use ESLint for code quality
- Maintain consistent component structure
- Write tests for new features
- Keep components reusable and composable

## Deployment

The application can be built for production using:
```bash
pnpm build
```

The output will be in the `dist` directory.
