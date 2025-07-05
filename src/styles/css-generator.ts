/**
 * CSS Generator - Builds complete CSS for the package
 * This generates all the CSS that will be bundled with the package
 */

import { css, patterns, tokens } from './design-system';

// CSS Reset and base styles
const cssReset = `
/* CSS Reset for Schilling Widgets */
.schilling-widgets,
.schilling-widgets *,
.schilling-widgets *::before,
.schilling-widgets *::after {
  box-sizing: border-box;
}

.schilling-widgets * {
  border-width: 0;
  border-style: solid;
  border-color: theme(borderColor.DEFAULT, currentColor);
}

.schilling-widgets *::before,
.schilling-widgets *::after {
  --tw-content: '';
}
`;

// Component styles using our design system
const componentStyles = `
/* Button Variants */
.schilling-button {
  ${css.stringify(patterns.buttonBase)}
}

.schilling-button--primary {
  background-color: ${tokens.colors.primary[600]};
  color: ${tokens.colors.white};
}

.schilling-button--primary:hover {
  background-color: ${tokens.colors.primary[700]};
}

.schilling-button--primary:focus {
  box-shadow: 0 0 0 2px ${tokens.colors.primary[200]};
}

.schilling-button--secondary {
  background-color: ${tokens.colors.secondary[100]};
  color: ${tokens.colors.secondary[900]};
  border: 1px solid ${tokens.colors.secondary[300]};
}

.schilling-button--secondary:hover {
  background-color: ${tokens.colors.secondary[200]};
}

.schilling-button--outline {
  background-color: transparent;
  color: ${tokens.colors.primary[600]};
  border: 1px solid ${tokens.colors.primary[300]};
}

.schilling-button--outline:hover {
  background-color: ${tokens.colors.primary[50]};
}

.schilling-button--ghost {
  background-color: transparent;
  color: ${tokens.colors.secondary[700]};
}

.schilling-button--ghost:hover {
  background-color: ${tokens.colors.secondary[100]};
}

.schilling-button--destructive {
  background-color: ${tokens.colors.error[500]};
  color: ${tokens.colors.white};
}

.schilling-button--destructive:hover {
  background-color: ${tokens.colors.error[900]};
}

/* Button Sizes */
.schilling-button--sm {
  height: ${tokens.spacing[8]};
  padding-left: ${tokens.spacing[3]};
  padding-right: ${tokens.spacing[3]};
  font-size: ${tokens.fontSize.xs[0]};
}

.schilling-button--md {
  height: ${tokens.spacing[10]};
  padding-left: ${tokens.spacing[4]};
  padding-right: ${tokens.spacing[4]};
  font-size: ${tokens.fontSize.sm[0]};
}

.schilling-button--lg {
  height: ${tokens.spacing[12]};
  padding-left: ${tokens.spacing[8]};
  padding-right: ${tokens.spacing[8]};
  font-size: ${tokens.fontSize.base[0]};
}

.schilling-button--icon {
  height: ${tokens.spacing[10]};
  width: ${tokens.spacing[10]};
  padding: 0;
}

/* Input Styles */
.schilling-input {
  ${css.stringify(patterns.inputBase)}
}

.schilling-input:focus {
  border-color: ${tokens.colors.primary[500]};
  box-shadow: 0 0 0 2px ${tokens.colors.primary[200]};
}

.schilling-input:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.schilling-input::placeholder {
  color: ${tokens.colors.secondary[400]};
}

/* Card Styles */
.schilling-card {
  ${css.stringify(patterns.cardBase)}
}

.schilling-card-header {
  display: flex;
  flex-direction: column;
  space-y: ${tokens.spacing[2]};
  padding: ${tokens.spacing[6]};
}

.schilling-card-title {
  font-size: ${tokens.fontSize.lg[0]};
  font-weight: ${tokens.fontWeight.semibold};
  line-height: ${tokens.fontSize.lg[1].lineHeight};
}

.schilling-card-description {
  font-size: ${tokens.fontSize.sm[0]};
  color: ${tokens.colors.secondary[600]};
}

.schilling-card-content {
  padding: ${tokens.spacing[6]};
  padding-top: 0;
}

.schilling-card-footer {
  display: flex;
  align-items: center;
  padding: ${tokens.spacing[6]};
  padding-top: 0;
}

/* Badge Styles */
.schilling-badge {
  display: inline-flex;
  align-items: center;
  border-radius: ${tokens.borderRadius.full};
  padding: ${tokens.spacing[1]} ${tokens.spacing[2]};
  font-size: ${tokens.fontSize.xs[0]};
  font-weight: ${tokens.fontWeight.semibold};
  transition: ${tokens.transitions.fast};
  border: 1px solid transparent;
}

.schilling-badge--default {
  background-color: ${tokens.colors.secondary[900]};
  color: ${tokens.colors.secondary[50]};
}

.schilling-badge--secondary {
  background-color: ${tokens.colors.secondary[100]};
  color: ${tokens.colors.secondary[900]};
}

.schilling-badge--destructive {
  background-color: ${tokens.colors.error[500]};
  color: ${tokens.colors.error[50]};
}

.schilling-badge--outline {
  color: ${tokens.colors.secondary[950]};
  border-color: ${tokens.colors.secondary[200]};
}

/* Loading Spinner */
.schilling-spinner {
  animation: schilling-spin 1s linear infinite;
}

@keyframes schilling-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Checkbox Styles */
.schilling-checkbox {
  height: ${tokens.spacing[4]};
  width: ${tokens.spacing[4]};
  border: 1px solid ${tokens.colors.primary[500]};
  border-radius: ${tokens.borderRadius.sm};
  background-color: transparent;
  transition: ${tokens.transitions.fast};
}

.schilling-checkbox:checked {
  background-color: ${tokens.colors.primary[600]};
  border-color: ${tokens.colors.primary[600]};
}

.schilling-checkbox:focus {
  box-shadow: 0 0 0 2px ${tokens.colors.primary[200]};
}

.schilling-checkbox:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Avatar Styles */
.schilling-avatar {
  position: relative;
  display: flex;
  height: ${tokens.spacing[10]};
  width: ${tokens.spacing[10]};
  shrink: 0;
  overflow: hidden;
  border-radius: ${tokens.borderRadius.full};
  background-color: ${tokens.colors.secondary[100]};
}

.schilling-avatar--sm {
  height: ${tokens.spacing[8]};
  width: ${tokens.spacing[8]};
}

.schilling-avatar--lg {
  height: ${tokens.spacing[12]};
  width: ${tokens.spacing[12]};
}

.schilling-avatar-image {
  aspect-ratio: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.schilling-avatar-fallback {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${tokens.colors.secondary[100]};
  color: ${tokens.colors.secondary[600]};
  font-size: ${tokens.fontSize.sm[0]};
  font-weight: ${tokens.fontWeight.medium};
}

/* Tabs Styles */
.schilling-tabs-list {
  display: inline-flex;
  height: ${tokens.spacing[10]};
  align-items: center;
  justify-content: center;
  border-radius: ${tokens.borderRadius.md};
  background-color: ${tokens.colors.secondary[100]};
  padding: ${tokens.spacing[1]};
  color: ${tokens.colors.secondary[600]};
}

.schilling-tabs-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: ${tokens.borderRadius.sm};
  padding: ${tokens.spacing[3]} ${tokens.spacing[4]};
  font-size: ${tokens.fontSize.sm[0]};
  font-weight: ${tokens.fontWeight.medium};
  transition: ${tokens.transitions.fast};
  border: none;
  background: transparent;
  cursor: pointer;
}

.schilling-tabs-trigger:focus {
  box-shadow: 0 0 0 2px ${tokens.colors.primary[200]};
}

.schilling-tabs-trigger[data-state="active"] {
  background-color: ${tokens.colors.white};
  color: ${tokens.colors.secondary[950]};
  box-shadow: ${tokens.shadows.sm};
}

.schilling-tabs-content {
  margin-top: ${tokens.spacing[2]};
  border-radius: ${tokens.borderRadius.md};
  border: 1px solid ${tokens.colors.secondary[200]};
  padding: ${tokens.spacing[4]};
}

.schilling-tabs-content:focus {
  box-shadow: 0 0 0 2px ${tokens.colors.primary[200]};
}

/* Utility Classes */
.schilling-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.schilling-focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .schilling-widgets {
    color-scheme: dark;
  }

  .schilling-card {
    background-color: ${tokens.colors.secondary[950]};
    border-color: ${tokens.colors.secondary[800]};
    color: ${tokens.colors.secondary[50]};
  }

  .schilling-input {
    background-color: ${tokens.colors.secondary[950]};
    border-color: ${tokens.colors.secondary[800]};
    color: ${tokens.colors.secondary[50]};
  }

  .schilling-input::placeholder {
    color: ${tokens.colors.secondary[400]};
  }

  .schilling-tabs-list {
    background-color: ${tokens.colors.secondary[800]};
  }

  .schilling-tabs-trigger[data-state="active"] {
    background-color: ${tokens.colors.secondary[950]};
    color: ${tokens.colors.secondary[50]};
  }

  .schilling-tabs-content {
    border-color: ${tokens.colors.secondary[800]};
  }
}
`;

// Combine all styles
export const generateCompleteCSS = (): string => {
  return [css.generateVariables(), cssReset, componentStyles].join('\n\n');
};

// Export individual parts for flexibility
export { componentStyles, cssReset };
