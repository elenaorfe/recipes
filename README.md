# Recipes Application

A modern, responsive recipe application built with React, TypeScript, and Vite.

## Project Structure

This is a monorepo structure using pnpm workspaces:

```
.
├── apps/
│   └── web/          # Main web application
├── packages/
├── pnpm-workspace.yaml  # Workspace configuration
└── package.json         # Root package configuration
```

## Features

- **Modern React Development**: Built with React 19 and TypeScript
- **Internationalization**: Multi-language support (English and Spanish)
- **GraphQL Integration**: Powered by Apollo Client for data fetching
- **Responsive Design**: Mobile-first responsive UI with Tailwind CSS
- **Routing**: Client-side routing with React Router
- **ESLint & TypeScript**: Strict type checking and code quality

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks, Apollo Client
- **Internationalization**: i18next
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js (version specified in `package.json`)
- pnpm (version 11.1.2 or higher)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Add your GraphQL API credentials

4. Start the development server:

```bash
pnpm dev
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

## Environment Variables

Create a `.env.local` file in the `apps/web` directory with:

```bash
VITE_GRAPHQL_URL=https://graphql.contentful.com/content/v1/spaces/YOUR_SPACE_ID
VITE_GRAPHQL_API_KEY=Bearer YOUR_API_KEY
```

## Directory Structure

```
apps/
└── web/
    ├── src/
    │   ├── components/     # Reusable UI components
    │   ├── lib/           # Libraries and utilities
    │   ├── i18n/          # Internationalization files
    │   └── App.tsx        # Main application component
    ├── public/           # Static assets
    └── index.html        # Entry HTML file
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

## License

This project is licensed under the ISC License.
