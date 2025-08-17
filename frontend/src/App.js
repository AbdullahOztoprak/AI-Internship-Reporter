import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState('');
  const [report, setReport] = useState('');

  const handleGenerate = (e) => {
    e.preventDefault();
    // Placeholder, backend ile bağlanacak
    setReport('Your generated internship report will appear here.');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fff5f5', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <div style={{ maxWidth: 600, width: '100%', background: '#ffffff', padding: 30, borderRadius: 12, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#c53030', textAlign: 'center', marginBottom: 24 }}>AI Internship Reporter</h1>
        
        <form onSubmit={handleGenerate}>
          <label htmlFor="notes" style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#333' }}>
            Paste your internship notes:
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={8}
            style={{ width: '100%', marginBottom: 20, padding: 12, fontSize: 16, borderRadius: 6, border: '1px solid #ddd', resize: 'vertical' }}
            placeholder="Enter your daily notes or tasks here..."
          />
          <button
            type="submit"
            style={{ width: '100%', padding: '12px', fontSize: 16, fontWeight: 'bold', color: '#fff', backgroundColor: '#c53030', border: 'none', borderRadius: 6, cursor: 'pointer', transition: 'background 0.3s' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#9b2c2c'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#c53030'}
          >
            Generate Report
          </button>
        </form>

        <div style={{ marginTop: 32 }}>
          <h2 style={{ color: '#c53030', marginBottom: 12 }}>Generated Report</h2>
          <div style={{ minHeight: 120, background: '#fff0f0', padding: 16, borderRadius: 8, border: '1px solid #f1c2c2', color: '#333', whiteSpace: 'pre-wrap' }}>
            {report}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
