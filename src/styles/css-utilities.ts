/**
 * CSS-in-JS Utilities - Auto-contained styling system
 * Similar to how Emotion and Material UI handle styles
 */

import React, { useMemo } from 'react';

// Type for style variants
export type StyleVariants<T> = {
  [K in keyof T]: {
    [V in keyof T[K]]: string;
  };
};

// Class name utilities
export const cn = (
  ...inputs: (string | undefined | null | false)[]
): string => {
  return inputs.filter(Boolean).join(' ');
};

// CSS class generator for components
export const createStyleVariants = <
  T extends Record<string, Record<string, string>>,
>(
  baseClass: string,
  variants: T
) => {
  return (
    props: {
      [K in keyof T]?: keyof T[K];
    } & {
      className?: string;
    }
  ) => {
    const classes = [baseClass];

    // Add variant classes
    Object.entries(variants).forEach(([variantName, variantValues]) => {
      const selectedVariant = props[variantName as keyof typeof props];
      if (selectedVariant && variantValues[String(selectedVariant)]) {
        classes.push(`${baseClass}--${String(selectedVariant)}`);
      }
    });

    // Add custom className
    if (props.className) {
      classes.push(props.className);
    }

    return cn(...classes);
  };
};

// Hook to inject CSS into document head
export const useInjectStyles = (css: string) => {
  useMemo(() => {
    // Check if styles are already injected
    const existingStyle = document.getElementById('schilling-widgets-styles');
    if (existingStyle) {
      return;
    }

    // Create and inject style element
    const styleElement = document.createElement('style');
    styleElement.id = 'schilling-widgets-styles';
    styleElement.textContent = css;
    document.head.appendChild(styleElement);

    // Cleanup function
    return () => {
      const element = document.getElementById('schilling-widgets-styles');
      if (element) {
        element.remove();
      }
    };
  }, [css]);
};

// Component wrapper that auto-injects styles
export const withAutoStyles = <P extends object>(
  Component: React.ComponentType<P>,
  css: string
): React.ComponentType<P> => {
  const WrappedComponent = (props: P) => {
    useInjectStyles(css);
    return React.createElement(Component, props);
  };

  return WrappedComponent;
};

// CSS variable utilities
export const cssVar = (name: string, fallback?: string): string => {
  const fallbackStr = fallback ? `, ${fallback}` : '';
  return `var(--${name}${fallbackStr})`;
};

// Style object to CSS string converter
export const styleToCSS = (styles: Record<string, string | number>): string => {
  return Object.entries(styles)
    .map(([property, value]) => {
      const cssProperty = property.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${cssProperty}: ${value};`;
    })
    .join(' ');
};

// Dynamic style injection for runtime styles
export const injectGlobalStyles = (styles: string, id: string) => {
  const existingStyle = document.getElementById(id);
  if (existingStyle) {
    existingStyle.textContent = styles;
    return;
  }

  const styleElement = document.createElement('style');
  styleElement.id = id;
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
};

// Theme context utilities
export const createThemeCSS = (theme: 'light' | 'dark') => {
  const darkModeStyles = `
    .schilling-widgets[data-theme="dark"] {
      color-scheme: dark;
    }

    .schilling-widgets[data-theme="dark"] .schilling-card {
      background-color: #0f172a;
      border-color: #1e293b;
      color: #f8fafc;
    }

    .schilling-widgets[data-theme="dark"] .schilling-input {
      background-color: #0f172a;
      border-color: #1e293b;
      color: #f8fafc;
    }

    .schilling-widgets[data-theme="dark"] .schilling-input::placeholder {
      color: #94a3b8;
    }

    .schilling-widgets[data-theme="dark"] .schilling-tabs-list {
      background-color: #1e293b;
    }

    .schilling-widgets[data-theme="dark"] .schilling-tabs-trigger[data-state="active"] {
      background-color: #0f172a;
      color: #f8fafc;
    }

    .schilling-widgets[data-theme="dark"] .schilling-tabs-content {
      border-color: #1e293b;
    }
  `;

  return theme === 'dark' ? darkModeStyles : '';
};

export default {
  cn,
  createStyleVariants,
  useInjectStyles,
  withAutoStyles,
  cssVar,
  styleToCSS,
  injectGlobalStyles,
  createThemeCSS,
};
