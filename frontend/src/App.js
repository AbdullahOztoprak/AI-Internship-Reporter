import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState('');
  const [report, setReport] = useState('');

  const handleGenerate = (e) => {
    e.preventDefault();
    // For now, just show a placeholder. Later, this will call your backend.
    setReport('Your generated internship report will appear here.');
  };

  return (
    <div className="App" style={{ maxWidth: 600, margin: '40px auto', padding: 20, border: '1px solid #eee', borderRadius: 8 }}>
      <h1>AI Internship Reporter</h1>
      <form onSubmit={handleGenerate}>
        <label htmlFor="notes" style={{ display: 'block', marginBottom: 8 }}>
          Paste your internship notes:
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={8}
          style={{ width: '100%', marginBottom: 16, padding: 8, fontSize: 16 }}
          placeholder="Enter your daily notes or tasks here..."
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: 16 }}>
          Generate Report
        </button>
      </form>
      <div style={{ marginTop: 32 }}>
        <h2>Generated Report</h2>
        <div style={{ minHeight: 80, background: '#fafafa', padding: 16, borderRadius: 4, border: '1px solid #ddd' }}>
          {report}
        </div>
      </div>
    </div>
  );
}

export default App;