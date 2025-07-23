# replit.md

## Overview

This is a full-stack web application built for a business services company called "ProServe". The application serves as a business website offering various services including printing, laminating, financial transactions, and educational support. It's built with a modern React frontend and Express.js backend, using PostgreSQL with Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React-based SPA with TypeScript
- **Backend**: Express.js REST API with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for frontend bundling
- **Development**: Full-stack development with hot reloading

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query for API calls and caching
- **UI Framework**: Modern React with TypeScript

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Storage**: Abstracted storage interface with memory implementation (ready for database)
- **Validation**: Shared Zod schemas between frontend and backend
- **Middleware**: Request logging and error handling

### Database Schema
The application manages three main entities:
- **Users**: Basic user authentication structure
- **Inquiries**: Contact form submissions from potential customers
- **Service Requests**: Detailed service request forms for specific services
- **Registration Assistance**: University registration help requests

### Shared Code
- **Schema Definition**: Zod schemas in `/shared/schema.ts` for type safety
- **Type Safety**: Full TypeScript coverage with shared types

## Data Flow

1. **Client Requests**: Frontend components use TanStack Query to make API calls
2. **API Processing**: Express routes validate data using Zod schemas
3. **Data Storage**: Currently uses in-memory storage with interface ready for database
4. **Response Handling**: Standardized JSON responses with error handling
5. **UI Updates**: TanStack Query automatically updates UI with fresh data

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Database connection (Neon PostgreSQL)
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **wouter**: Lightweight React router

### UI Components
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle handles migrations and schema management

### Environment Configuration
- **Development**: Uses Vite dev server with Express API
- **Production**: Serves static files from Express with API routes
- **Database**: PostgreSQL connection via environment variables

### Scripts
- `npm run dev`: Development mode with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

The application is designed to be easily deployable to platforms like Replit, with proper environment variable configuration for the PostgreSQL database connection.