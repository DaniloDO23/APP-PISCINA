import { useState } from 'react';

export default function App() {
        const [pool, setPool] = useState('');
        const [size, setSize] = useState('');
        const [complexity, setComplexity] = useState('low');
        const [budget, setBudget] = useState(null);

  const calculateBudget = () => {
            if (!pool || !size) {
                        alert('Please fill in all fields');
                        return;
            }

            const sizeNum = parseFloat(size);
            const baseCost = sizeNum * 150;
            const multipliers = { low: 1, medium: 1.3, high: 1.6 };
            const total = Math.round(baseCost * multipliers[complexity]);
            setBudget(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total / 100));
  };

  return (
            <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px', fontFamily: 'system-ui' }}>
                        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', borderRadius: '12px', padding: '40px' }}>
                                      <h1 style={{ textAlign: 'center', marginBottom: '10px', color: '#333', fontSize: '28px' }}>AquaOrca AI</h1>h1>
                                      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px', fontSize: '14px' }}>Smart pool maintenance budgets</p>p>

                                      <div style={{ marginBottom: '20px' }}>
                                                      <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500', fontSize: '14px' }}>Pool Number:</label>label>
                                                      <input type="text" value={pool} onChange={(e) => setPool(e.target.value)} placeholder="Ex: PSC-001" style={{ width: '100%', padding: '12px', border: '2px solid #eee', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                                      </div>div>

                                      <div style={{ marginBottom: '20px' }}>
                                                      <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500', fontSize: '14px' }}>Size (m2):</label>label>
                                                      <input type="number" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Ex: 25" step="0.1" style={{ width: '100%', padding: '12px', border: '2px solid #eee', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                                      </div>div>

                                      <div style={{ marginBottom: '20px' }}>
                                                      <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500', fontSize: '14px' }}>Complexity:</label>label>
                                                      <select value={complexity} onChange={(e) => setComplexity(e.target.value)} style={{ width: '100%', padding: '12px', border: '2px solid #eee', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}>
                                                                        <option value="low">Low (Simple)</option>option>
                                                                  <option value="medium">Medium (Normal)</option>option>
                                                                  <option value="high">High (Complex)</option>option>
                                                      </select>select>
                                      </div>div>
                        
                                <button onClick={calculateBudget} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '20px' }}>Calculate Budget</button>button>
                        
                              {budget && (
                            <div style={{ background: '#f0f9ff', border: '2px solid #0ea5e9', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
                                        <h2 style={{ color: '#0369a1', marginTop: '0', marginBottom: '15px', fontSize: '18px' }}>Generated Budget</h2>h2>
                                        <div style={{ marginBottom: '12px' }}>
                                                      <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Pool:</p>p>
                                                      <p style={{ margin: '0', color: '#333', fontSize: '16px', fontWeight: '600' }}>{pool}</p>p>
                                        </div>div>
                                        <div style={{ marginBottom: '12px' }}>
                                                      <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Size:</p>p>
                                                      <p style={{ margin: '0', color: '#333', fontSize: '16px', fontWeight: '600' }}>{size} m2</p>p>
                                        </div>div>
                                        <div style={{ marginBottom: '12px' }}>
                                                      <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Complexity:</p>p>
                                                      <p style={{ margin: '0', color: '#333', fontSize: '16px', fontWeight: '600', textTransform: 'capitalize' }}>{complexity}</p>p>
                                        </div>div>
                                        <div style={{ background: 'white', padding: '15px', borderRadius: '6px', marginTop: '15px', textAlign: 'center', border: '2px solid #0ea5e9' }}>
                                                      <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>Total Value</p>p>
                                                      <p style={{ margin: '0', color: '#0ea5e9', fontSize: '32px', fontWeight: '700' }}>{budget}</p>p>
                                        </div>div>
                            </div>div>
                                )}
                        </div>div>
            </div>div>
          );
}</option>
