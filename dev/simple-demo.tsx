/**
 * Simple CSS-in-JS Test - Proof of Concept
 * This demonstrates how we can have self-contained styles like Material UI
 */

import React from 'react';
import { createRoot } from 'react-dom/client';

// Simple CSS injection function
const injectCSS = (css: string) => {
  if (document.getElementById('schilling-styles')) return;

  const style = document.createElement('style');
  style.id = 'schilling-styles';
  style.textContent = css;
  document.head.appendChild(style);
};

// Our complete CSS (simplified for demo)
const WIDGET_STYLES = `
/* CSS Variables */
:root {
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --secondary-100: #f1f5f9;
  --secondary-200: #e2e8f0;
  --secondary-900: #0f172a;
  --white: #ffffff;
}

/* Button Base */
.schilling-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.15s ease;
  border: none;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  user-select: none;
  height: 2.5rem;
  padding: 0 1rem;
}

/* Button Variants */
.schilling-btn--primary {
  background-color: var(--primary-600);
  color: var(--white);
}

.schilling-btn--primary:hover {
  background-color: var(--primary-700);
}

.schilling-btn--secondary {
  background-color: var(--secondary-100);
  color: var(--secondary-900);
  border: 1px solid var(--secondary-200);
}

.schilling-btn--secondary:hover {
  background-color: var(--secondary-200);
}

/* Button Sizes */
.schilling-btn--sm {
  height: 2rem;
  padding: 0 0.75rem;
  font-size: 0.75rem;
}

.schilling-btn--lg {
  height: 3rem;
  padding: 0 2rem;
  font-size: 1rem;
}

/* Card */
.schilling-card {
  border-radius: 0.5rem;
  border: 1px solid var(--secondary-200);
  background-color: var(--white);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  padding: 1.5rem;
  margin: 1rem 0;
}
`;

// Simple Button component with auto-style injection
interface SimpleButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled,
}) => {
  // Inject styles when component is used
  React.useEffect(() => {
    injectCSS(WIDGET_STYLES);
  }, []);

  const className = [
    'schilling-btn',
    `schilling-btn--${variant}`,
    size !== 'md' ? `schilling-btn--${size}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

// Simple Card component
const SimpleCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    injectCSS(WIDGET_STYLES);
  }, []);

  return <div className='schilling-card'>{children}</div>;
};

// Demo App
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>🎉 CSS-in-JS Self-Contained Demo</h1>
      <p>
        This demonstrates how we can have Material UI-style self-contained
        components!
      </p>

      <SimpleCard>
        <h3>✨ Auto-Injected Styles</h3>
        <p>
          These components automatically inject their CSS when used - no
          external imports needed!
        </p>
        <p>Count: {count}</p>

        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginTop: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <SimpleButton
            variant='primary'
            size='sm'
            onClick={() => setCount(c => c + 1)}
          >
            Small +1
          </SimpleButton>

          <SimpleButton variant='primary' onClick={() => setCount(c => c + 5)}>
            Medium +5
          </SimpleButton>

          <SimpleButton
            variant='primary'
            size='lg'
            onClick={() => setCount(c => c + 10)}
          >
            Large +10
          </SimpleButton>

          <SimpleButton variant='secondary' onClick={() => setCount(0)}>
            Reset
          </SimpleButton>
        </div>
      </SimpleCard>

      <SimpleCard>
        <h3>🔍 Check the Inspector</h3>
        <p>
          Look at the &lt;head&gt; section - you'll see our styles were
          auto-injected!
        </p>
        <ul style={{ marginLeft: '1rem' }}>
          <li>✅ No external CSS file needed</li>
          <li>✅ Styles bundled with JavaScript</li>
          <li>✅ Works like Material UI</li>
          <li>✅ Zero configuration for end users</li>
        </ul>

        <SimpleButton
          variant='secondary'
          onClick={() => {
            const styleEl = document.getElementById('schilling-styles');
            if (styleEl) {
              console.log('💅 Injected CSS:', styleEl.textContent);
              // Use window.alert instead of alert to avoid eslint issues
              window.alert('CSS logged to console! Check the developer tools.');
            }
          }}
        >
          🔍 Inspect Generated CSS
        </SimpleButton>
      </SimpleCard>

      <SimpleCard>
        <h3>🎯 Why This Works</h3>
        <p>This approach follows the same pattern as successful libraries:</p>
        <ul style={{ marginLeft: '1rem' }}>
          <li>
            <strong>Material UI:</strong> Uses Emotion/styled-components for
            CSS-in-JS
          </li>
          <li>
            <strong>Chakra UI:</strong> Styles defined in JavaScript
          </li>
          <li>
            <strong>Ant Design:</strong> CSS bundled with components
          </li>
          <li>
            <strong>Our Solution:</strong> Auto-inject styles when components
            are used
          </li>
        </ul>
      </SimpleCard>
    </div>
  );
}

// Mount the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
