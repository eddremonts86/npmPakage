<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Schilling Widgets System Instructions

This is the **Schilling Widgets System** (@schilling-apps/schilling-widgets-system) - a TypeScript npm package that provides reusable UI components and utilities for React applications. The package includes:

## Key Technologies

-   **React** - UI library
-   **TypeScript** - Type safety
-   **Tailwind CSS** - Styling framework
-   **Shadcn UI** - Design system components
-   **TanStack Query** - Data fetching and state management
-   **Rollup** - Build tool for packaging

## Component Guidelines

-   All components should be built using React functional components with TypeScript
-   Use `React.forwardRef` for components that need DOM element references
-   Implement proper prop interfaces extending appropriate HTML element types
-   Use `class-variance-authority` for component variants
-   Apply the `cn` utility function for className merging
-   Follow Shadcn UI design patterns and styling conventions

## Styling Rules

-   Use Tailwind CSS classes for all styling
-   Follow CSS custom properties for theme colors (--primary, --secondary, etc.)
-   Implement both light and dark mode support
-   Use semantic color names from the design system

## API/Data Fetching

-   Use TanStack Query hooks for all data fetching
-   Implement generic API utilities in `useApi.ts`
-   Provide proper TypeScript generics for API responses
-   Handle loading states and error conditions consistently

## Build and Export

-   Export all components and utilities from `src/index.ts`
-   Maintain proper TypeScript type exports
-   Use Rollup for building both CommonJS and ES modules
-   Include CSS in the build output

## Best Practices

-   Keep components small and focused on single responsibility
-   Provide comprehensive TypeScript types for all props and return values
-   Use meaningful component and prop names
-   Include proper JSDoc comments for public APIs
-   Follow React best practices for performance and accessibility
