import { createRoot } from 'react-dom/client';

function SimpleApp() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: 'Arial, sans-serif',
        color: 'white',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          🎉 React is Working!
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Schilling Widgets Dev Environment
        </p>
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
          }}
        >
          <p>✅ Vite + React + TypeScript</p>
          <p>✅ Hot Module Replacement</p>
          <p>✅ Ready for development!</p>
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<SimpleApp />);
} else {
  console.error('Root container not found!');
}
