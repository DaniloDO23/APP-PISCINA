import { useState } from 'react';

export default function App() {
      const [pool, setPool] = useState('');
      const [size, setSize] = useState('');
      const [complexity, setComplexity] = useState('low');
      const [price, setPrice] = useState(null);

  const calculate = () => {
          if (!pool || !size) {
                    alert('Please fill all fields');
                    return;
          }

          const s = parseFloat(size);
          const base = s * 150;
          const multipliers = { low: 1, medium: 1.3, high: 1.6 };
          const total = Math.round(base * multipliers[complexity]);

          setPrice({
                    pool,
                    size: s,
                    complexity,
                    value: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)
          });
  };

  return (
          <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px', fontFamily: 'sans-serif' }}>
                    <div style={{ maxWidth: '500px', margin: '0 auto', background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
                                <h1 style={{ textAlign: 'center', color: '#333' }}>AquaOrca AI</h1>h1>
                                <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Smart pool maintenance quotes</p>p>

                                <div style={{ marginBottom: '20px' }}>
                                              <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>Pool Number</label>label>
                                              <input type="text" value={pool} onChange={(e) => setPool(e.target.value)} placeholder="Ex: PSC-001" style={{ width: '100%', padding: '10px', border: '2px solid #eee', borderRadius: '6px', boxSizing: 'border-box' }} />
                                </div>div>

                                <div style={{ marginBottom: '20px' }}>
                                              <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>Size (m2)</label>label>
                                              <input type="number" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Ex: 25" step="0.1" style={{ width: '100%', padding: '10px', border: '2px solid #eee', borderRadius: '6px', boxSizing: 'border-box' }} />
                                </div>div>

                                <div style={{ marginBottom: '20px' }}>
                                              <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '500' }}>Complexity</label>label>
                                              <select value={complexity} onChange={(e) => setComplexity(e.target.value)} style={{ width: '100%', padding: '10px', border: '2px solid #eee', borderRadius: '6px', boxSizing: 'border-box' }}>
                                                              <option value="low">Low</option>option>
                                                          <option value="medium">Medium</option>option>
                                                          <option value="high">High</option>option>
                                              </select>select>
                                </div>div>
                    
                            <button onClick={calculate} style={{ width: '100%', padding: '12px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '20px' }}>
                                      Calculate
                            </button>button>
                    
                        {price && (
                        <div style={{ background: '#f0f9ff', border: '2px solid #0ea5e9', borderRadius: '8px', padding: '20px' }}>
                                    <h2 style={{ color: '#0369a1', marginBottom: '15px', fontSize: '18px' }}>Quote</h2>h2>
                                    <div><p style={{ margin: '0 0 4px 0', color: '#666' }}>Pool: {price.pool}</p>p></div>div>
                                    <div><p style={{ margin: '0 0 4px 0', color: '#666' }}>Size: {price.size} m2</p>p></div>div>
                                    <div><p style={{ margin: '0 0 4px 0', color: '#666' }}>Complexity: {price.complexity}</p>p></div>div>
                                    <div style={{ background: 'white', padding: '15px', borderRadius: '6px', marginTop: '15px', textAlign: 'center', border: '2px solid #0ea5e9' }}>
                                                  <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>Total Value</p>p>
                                                  <p style={{ margin: '0', color: '#0ea5e9', fontSize: '28px', fontWeight: '700' }}>{price.value}</p>p>
                                    </div>div>
                        </div>div>
                            )}
                    </div>div>
          </div>div>
        );
}</option>
