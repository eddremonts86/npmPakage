/**
 * Development Playground - CSS-in-JS Self-contained Version
 * No external dependencies - all styles are auto-injected
 */

import { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Import our new self-contained button
import { ButtonV2 } from '../src/components/ButtonV2';

// Import original components for comparison
import { Button as OriginalButton } from '../src/components/Button';

function PlaygroundApp() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className='playground-container'>
      {/* Header */}
      <div className='playground-header'>
        <h1>🎨 Schilling Widgets Playground</h1>
        <p>Testing CSS-in-JS Self-contained Architecture</p>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '0.25rem',
            background: 'white',
            cursor: 'pointer',
          }}
        >
          Toggle Theme: {theme}
        </button>
      </div>

      <div className='playground-grid'>
        {/* New Self-contained Button */}
        <div className='playground-section'>
          <h3>✨ New CSS-in-JS Button (ButtonV2)</h3>
          <div className='component-demo'>
            <div className='demo-group'>
              <ButtonV2 variant='primary' size='sm'>
                Primary Small
              </ButtonV2>
              <ButtonV2 variant='primary' size='md'>
                Primary Medium
              </ButtonV2>
              <ButtonV2 variant='primary' size='lg'>
                Primary Large
              </ButtonV2>
            </div>

            <div className='demo-group'>
              <ButtonV2 variant='secondary'>Secondary</ButtonV2>
              <ButtonV2 variant='outline'>Outline</ButtonV2>
              <ButtonV2 variant='ghost'>Ghost</ButtonV2>
              <ButtonV2 variant='destructive'>Destructive</ButtonV2>
            </div>

            <div className='demo-group'>
              <ButtonV2 variant='primary' disabled>
                Disabled
              </ButtonV2>
              <ButtonV2 variant='outline' disabled>
                Disabled Outline
              </ButtonV2>
            </div>
          </div>
        </div>

        {/* Original Button for Comparison */}
        <div className='playground-section'>
          <h3>📋 Original Button (for comparison)</h3>
          <div className='component-demo'>
            <div className='demo-group'>
              <OriginalButton variant='default' size='sm'>
                Original Small
              </OriginalButton>
              <OriginalButton variant='default'>Original Medium</OriginalButton>
              <OriginalButton variant='default' size='lg'>
                Original Large
              </OriginalButton>
            </div>

            <div className='demo-group'>
              <OriginalButton variant='secondary'>Secondary</OriginalButton>
              <OriginalButton variant='outline'>Outline</OriginalButton>
              <OriginalButton variant='ghost'>Ghost</OriginalButton>
              <OriginalButton variant='destructive'>Destructive</OriginalButton>
            </div>
          </div>
        </div>

        {/* CSS Injection Info */}
        <div className='playground-section'>
          <h3>🔍 CSS Injection Status</h3>
          <div className='component-demo'>
            <p>Check the &lt;head&gt; of this document. You should see:</p>
            <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
              <li>✅ No external CSS imports needed</li>
              <li>
                ✅ Auto-injected &lt;style id="schilling-widgets-styles"&gt;
              </li>
              <li>✅ All styles contained within JavaScript bundle</li>
              <li>✅ Works like Material UI / Emotion</li>
            </ul>

            <button
              onClick={() => {
                const styleElement = document.getElementById(
                  'schilling-widgets-styles'
                );
                if (styleElement) {
                  console.log('CSS Content:', styleElement.textContent);
                  alert('CSS content logged to console');
                } else {
                  alert('CSS not found - check console for errors');
                }
              }}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                border: '1px solid #ccc',
                borderRadius: '0.25rem',
                background: 'white',
                cursor: 'pointer',
              }}
            >
              🔍 Inspect Generated CSS
            </button>
          </div>
        </div>

        {/* Performance Info */}
        <div className='playground-section'>
          <h3>⚡ Performance Benefits</h3>
          <div className='component-demo'>
            <p>This approach provides:</p>
            <ul style={{ marginLeft: '1rem', marginTop: '0.5rem' }}>
              <li>🚀 No build-time CSS processing needed</li>
              <li>📦 Self-contained package</li>
              <li>🎯 Only used styles are included</li>
              <li>🔄 Runtime theme switching</li>
              <li>💾 Better caching (CSS in JS bundle)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mount the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<PlaygroundApp />);
} else {
  console.error('Root container not found');
}
