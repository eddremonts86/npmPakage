function TestExample() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: '#3b82f6', fontSize: '2rem', marginBottom: '1rem' }}>
        🎉 Dev Environment Working!
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#64748b' }}>
        The Vite development server is running successfully.
      </p>
      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
        }}
      >
        <h3 style={{ marginBottom: '0.5rem' }}>Next Steps:</h3>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <li>✅ Vite server configured</li>
          <li>✅ React components loading</li>
          <li>🔄 Widget components importing...</li>
        </ul>
      </div>
    </div>
  );
}

export default TestExample;
