/**
 * Design System - Auto-contained CSS-in-JS solution
 * Similar to how Material UI and Emotion work - all styles are self-contained
 */

// Design tokens
export const tokens = {
  colors: {
    // Primary colors
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554',
    },
    // Secondary colors
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
    // Status colors
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      900: '#14532d',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      900: '#78350f',
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      900: '#7f1d1d',
    },
    // Neutral colors
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent',
  },

  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  },

  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  transitions: {
    fast: '150ms ease',
    base: '250ms ease',
    slow: '350ms ease',
  },
} as const;

// Type definitions
export type ThemeTokens = typeof tokens;
export type ColorShades = keyof typeof tokens.colors.primary;
export type SpacingKeys = keyof typeof tokens.spacing;
export type BorderRadiusKeys = keyof typeof tokens.borderRadius;

// CSS generation utilities
export const css = {
  // Utility to generate CSS string from style object
  stringify: (styles: Record<string, any>): string => {
    return Object.entries(styles)
      .map(([property, value]) => {
        // Convert camelCase to kebab-case
        const cssProperty = property.replace(/([A-Z])/g, '-$1').toLowerCase();
        return `${cssProperty}: ${value};`;
      })
      .join(' ');
  },

  // Generate CSS variables
  generateVariables: (): string => {
    const vars: string[] = [];

    // Generate color variables
    Object.entries(tokens.colors).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === 'string') {
        vars.push(`--color-${colorName}: ${colorValue};`);
      } else {
        Object.entries(colorValue).forEach(([shade, value]) => {
          vars.push(`--color-${colorName}-${shade}: ${value};`);
        });
      }
    });

    // Generate spacing variables
    Object.entries(tokens.spacing).forEach(([key, value]) => {
      vars.push(`--spacing-${key}: ${value};`);
    });

    // Generate border radius variables
    Object.entries(tokens.borderRadius).forEach(([key, value]) => {
      vars.push(`--radius-${key}: ${value};`);
    });

    return `:root { ${vars.join(' ')} }`;
  },

  // Theme utilities
  theme: {
    color: (colorPath: string) => `var(--color-${colorPath})`,
    spacing: (key: SpacingKeys) => `var(--spacing-${key})`,
    radius: (key: BorderRadiusKeys) => `var(--radius-${key})`,
  },
} as const;

// Common style patterns
export const patterns = {
  // Button base styles
  buttonBase: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tokens.borderRadius.md,
    fontSize: tokens.fontSize.sm[0],
    fontWeight: tokens.fontWeight.medium,
    transition: tokens.transitions.fast,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    userSelect: 'none' as const,
  },

  // Input base styles
  inputBase: {
    display: 'flex',
    height: '2.5rem',
    width: '100%',
    borderRadius: tokens.borderRadius.md,
    border: `1px solid ${tokens.colors.secondary[300]}`,
    backgroundColor: tokens.colors.white,
    padding: `${tokens.spacing[2]} ${tokens.spacing[3]}`,
    fontSize: tokens.fontSize.sm[0],
    transition: tokens.transitions.fast,
    outline: 'none',
  },

  // Card base styles
  cardBase: {
    borderRadius: tokens.borderRadius.lg,
    border: `1px solid ${tokens.colors.secondary[200]}`,
    backgroundColor: tokens.colors.white,
    textColor: tokens.colors.secondary[950],
    boxShadow: tokens.shadows.sm,
  },
} as const;
