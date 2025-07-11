import React from 'react';
import { cn } from '../utils/cn';

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    />
  )
);
Tabs.displayName = "Tabs";

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
);
TabsList.displayName = "TabsList";

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string;
  isActive?: boolean;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, isActive, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    />
  )
);
TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  isActive?: boolean;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, isActive = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        !isActive && "hidden",
        className
      )}
      {...props}
    />
  )
);
TabsContent.displayName = "TabsContent";
