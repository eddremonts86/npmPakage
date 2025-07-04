// Main stylesheet containing both Tailwind CSS and CSS-only styles
// This file should be imported in your application's root file

// Import this file in your app:
// import 'schilling-widgets-system/dist/styles.css';

export const STYLES_PATH_TAILWIND = './globals.css';
export const STYLES_PATH_CSS_ONLY = './schilling-widgets.css';

// Export style-related utilities if needed
export const getStylesPath = (useTailwind: boolean = true) =>
  useTailwind ? STYLES_PATH_TAILWIND : STYLES_PATH_CSS_ONLY;
