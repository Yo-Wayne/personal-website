# Replit.md

## Overview

This is a modern full-stack portfolio web application built with a React frontend and Express.js backend. The application serves as a personal portfolio website showcasing projects, resume, publications, and contact information. It features a clean, responsive design with dark/light theme support and smooth animations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth transitions and scroll animations
- **State Management**: React Query (@tanstack/react-query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Schema**: Shared TypeScript schema definitions with Zod validation
- **Session Storage**: PostgreSQL-backed sessions (connect-pg-simple)
- **Development**: Hot reload with Vite integration

### Key Design Patterns
- **Shared Schema**: Common data types and validation between frontend and backend
- **Component Composition**: Reusable UI components with consistent design system
- **Server-Side Integration**: Vite middleware for seamless development experience
- **Type Safety**: Full TypeScript coverage across the entire stack

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and mobile responsiveness
- **Theme Provider**: Dark/light mode toggle with persistent user preferences
- **Page Components**: Home, Resume, Projects, Publications, Contact pages
- **UI Components**: Complete shadcn/ui component library integration
- **Animations**: ScrollReveal component for intersection-based animations

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory and database implementations
- **Route Registration**: Modular route system for API endpoints
- **Middleware**: Request logging, JSON parsing, and error handling
- **Vite Integration**: Development server with HMR support

### Database Schema
- **Users Table**: Authentication system ready (username, password)
- **Contacts Table**: Contact form submissions with timestamps
- **Type Generation**: Drizzle-generated types with Zod validation schemas

## Data Flow

1. **Client Requests**: React components make API calls through React Query
2. **Server Processing**: Express routes handle requests using the storage interface
3. **Database Operations**: Drizzle ORM performs type-safe database operations
4. **Response Handling**: Structured JSON responses with error handling
5. **State Updates**: React Query manages cache invalidation and updates

### Form Submission Flow
1. Frontend forms use React Hook Form with Zod validation
2. Client-side validation prevents invalid submissions
3. API requests sent to Express endpoints
4. Server-side validation using shared Zod schemas
5. Database persistence through Drizzle ORM
6. Success/error feedback through toast notifications

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Validation**: Zod for schema validation
- **Build Tools**: Vite, esbuild for production builds

### Development Dependencies
- **TypeScript**: Full type checking across the stack
- **Replit Integration**: Cartographer plugin for Replit-specific features
- **Development Tools**: tsx for TypeScript execution, runtime error overlay

## Deployment Strategy

### Production Build Process
1. **Frontend Build**: Vite builds optimized client assets to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Client build served as static files by Express

### Environment Configuration
- **Development**: tsx runs server with hot reload, Vite dev server for client
- **Production**: Node.js runs bundled server code serving static client files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Replit Integration**: Auto-scaling deployment target with build/run scripts

### Database Management
- **Migrations**: Drizzle Kit handles schema migrations in `/migrations`
- **Schema Push**: `npm run db:push` for development schema updates
- **Type Safety**: Generated types ensure compile-time database schema validation

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Added PostgreSQL database integration with contact form functionality
- June 26, 2025. Set dark mode as default theme, removed light mode, navigation moved to right side
- June 26, 2025. Restructured pages: Home, Resume (Technical Skills, Leadership, Competitions), Experiences (Work & Research), Contact
- June 26, 2025. Removed Projects and Publications pages, replaced with comprehensive Experiences page
- June 26, 2025. Added Blog/Vision section for sharing thoughts and industry philosophies
- June 26, 2025. Updated navigation order: Home → Resume → Experiences → Blog → Contact
- June 26, 2025. Updated all personal information for Yo-Wayne Chen: 17-year-old Full-Stack Software Engineer from Taipei, Taiwan
- June 26, 2025. Updated contact details: yowayne.chen@gmail.com, +886 988502733, Taipei location
- June 26, 2025. Updated experience: Intelligo internship, Academia Sinica & Chiao-Tung University research
- June 26, 2025. Updated education: Asia American International Academy student
- June 26, 2025. Updated achievements: VEX Robotics Champion, Debate Champion, Student Council President
- June 26, 2025. Updated stats: 4+ years coding, 5168 cups coffee, 100000+ aura points, 404 hours sleep lost
- June 26, 2025. Updated technical skills including C++ (90%), Java (70%), and comprehensive tech stack
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```