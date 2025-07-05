import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8fafc',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <header
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '2rem',
          textAlign: 'center',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            margin: '0 0 0.5rem 0',
            fontWeight: '700',
          }}
        >
          🎨 Schilling Widgets Dev Environment
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, margin: 0 }}>
          Development server is running!
        </p>

        <div style={{ margin: '2rem 0' }}>
          <button
            onClick={() => setCount(count => count + 1)}
            style={{
              backgroundColor: '#ffffff',
              color: '#667eea',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e =>
              ((e.target as HTMLButtonElement).style.transform = 'scale(1.05)')
            }
            onMouseLeave={e =>
              ((e.target as HTMLButtonElement).style.transform = 'scale(1)')
            }
          >
            Count is {count}
          </button>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            maxWidth: '400px',
            margin: '1rem auto',
          }}
        >
          <h3 style={{ marginBottom: '0.5rem' }}>Status:</h3>
          <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.25rem' }}>✅ React is working</li>
            <li style={{ marginBottom: '0.25rem' }}>✅ Vite HMR is active</li>
            <li style={{ marginBottom: '0.25rem' }}>
              ✅ TypeScript is configured
            </li>
            <li style={{ marginBottom: '0.25rem' }}>
              🔄 Ready to load widgets
            </li>
          </ul>
        </div>

        <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '1rem' }}>
          Edit <code>src/App-simple.tsx</code> and save to test HMR
        </p>
      </header>
    </div>
  );
}

export default App;
