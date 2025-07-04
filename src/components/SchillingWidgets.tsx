import { QueryClient } from '@tanstack/react-query';
import React from 'react';
import { QueryProvider } from '../hooks/QueryProvider';

export interface SchillingWidgetsProps {
  /**
   * The children components to render
   */
  children: React.ReactNode;
  /**
   * Optional custom QueryClient instance
   * If not provided, a default one will be created
   */
  queryClient?: QueryClient;
  /**
   * Whether to disable the internal QueryProvider
   * Set to true if you're already using QueryProvider in your app
   * @default false
   */
  disableQueryProvider?: boolean;
}

/**
 * SchillingWidgets - Root component that provides all necessary context
 *
 * This component automatically sets up TanStack Query and other necessary providers,
 * so users don't need to configure anything manually.
 *
 * @example
 * ```tsx
 * import { SchillingWidgets, TaskManager } from 'schilling-widgets-system';
 *
 * function App() {
 *   return (
 *     <SchillingWidgets>
 *       <TaskManager />
 *     </SchillingWidgets>
 *   );
 * }
 * ```
 */
export const SchillingWidgets: React.FC<SchillingWidgetsProps> = ({
  children,
  queryClient,
  disableQueryProvider = false,
}) => {
  // If QueryProvider is disabled, just render children
  if (disableQueryProvider) {
    return <>{children}</>;
  }

  // Otherwise, wrap in QueryProvider
  return <QueryProvider client={queryClient}>{children}</QueryProvider>;
};

export default SchillingWidgets;
