/**
 * Button Component - Auto-contained CSS-in-JS approach
 * Similar to Material UI - all styles are included in the JavaScript bundle
 */

import React from 'react';
import { generateCompleteCSS } from '../styles/css-generator';
import { createStyleVariants, useInjectStyles } from '../styles/css-utilities';

// Button variants configuration
const buttonVariants = {
  variant: {
    primary: 'primary',
    secondary: 'secondary',
    outline: 'outline',
    ghost: 'ghost',
    destructive: 'destructive',
  },
  size: {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    icon: 'icon',
  },
} as const;

// Create the class name generator
const getButtonClassName = createStyleVariants(
  'schilling-button',
  buttonVariants
);

// Button props interface
export interface ButtonV2Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant;
  size?: keyof typeof buttonVariants.size;
  asChild?: boolean;
  children?: React.ReactNode;
}

// Button component with auto-injected styles
export const ButtonV2 = React.forwardRef<HTMLButtonElement, ButtonV2Props>(
  (
    {
      variant = 'primary',
      size = 'md',
      className,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    // Auto-inject all widget styles when Button is used
    useInjectStyles(generateCompleteCSS());

    // Generate the appropriate class names
    const buttonClassName = getButtonClassName({ variant, size, className });

    // If asChild is true, we would clone the child element with our props
    // For now, let's keep it simple and just render a button
    if (asChild) {
      console.warn('asChild prop is not yet implemented');
    }

    return (
      <button ref={ref} className={buttonClassName} {...props}>
        {children}
      </button>
    );
  }
);

ButtonV2.displayName = 'ButtonV2';

// Export the variants for external use
export { buttonVariants };
