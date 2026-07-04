import { useState } from 'react';

export default function App() {
    const [numeroForm, setNumeroForm] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [complexidade, setComplexidade] = useState('baixa');
    const [orcamento, setOrcamento] = useState(null);

  const calcularOrcamento = () => {
        if (!tamanho || !numeroForm) {
                alert('Preencha todos os campos');
                return;
        }

        const tam = parseFloat(tamanho);
        const precoBase = tam * 150; // R$ 150 por m²

        const multiplicadores = {
                baixa: 1,
                media: 1.3,
                alta: 1.6
        };

        const valor = Math.round(precoBase * multiplicadores[complexidade]);
        setOrcamento({
                numero: numeroForm,
                tamanho: tam,
                complexidade,
                valor: valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        });
  };

  return (
        <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '20px',
                fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
                <div style={{
                  maxWidth: '600px',
                  margin: '0 auto',
                  background: 'white',
                  borderRadius: '12px',
                  padding: '40px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
        }}>
                          <h1 style={{
                    textAlign: 'center',
                    marginBottom: '10px',
                    color: '#333',
                    fontSize: '28px'
        }}>🏊 AquaOrça AI</h1>h1>

                          <p style={{
                    textAlign: 'center',
                    color: '#666',
                    marginBottom: '30px',
                    fontSize: '14px'
        }}>Orçamentos inteligentes para manutenção de piscinas</p>p>

                          <div style={{ marginBottom: '20px' }}>
                                      <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: '#333',
                      fontWeight: '500',
                      fontSize: '14px'
        }}>Número da Piscina:</label>label>
                                      <input
                                                    type="text"
                                                    value={numeroForm}
                                                    onChange={(e) => setNumeroForm(e.target.value)}
                                                    placeholder="Ex: PSC-001"
                                                    style={{
                                                                    width: '100%',
                                                                    padding: '12px',
                                                                    border: '2px solid #eee',
                                                                    borderRadius: '6px',
                                                                    fontSize: '14px',
                                                                    boxSizing: 'border-box',
                                                                    transition: 'border-color 0.3s'
                                                    }}
                                                  />
                          </div>div>

                          <div style={{ marginBottom: '20px' }}>
                                      <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: '#333',
                      fontWeight: '500',
                      fontSize: '14px'
        }}>Tamanho (m²):</label>label>
                                      <input
                                                    type="number"
                                                    value={tamanho}
                                                    onChange={(e) => setTamanho(e.target.value)}
                                                    placeholder="Ex: 25"
                                                    step="0.1"
                                                    style={{
                                                                    width: '100%',
                                                                    padding: '12px',
                                                                    border: '2px solid #eee',
                                                                    borderRadius: '6px',
                                                                    fontSize: '14px',
                                                                    boxSizing: 'border-box'
                                                    }}
                                                  />
                          </div>div>

                          <div style={{ marginBottom: '20px' }}>
                                      <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: '#333',
                      fontWeight: '500',
                      fontSize: '14px'
        }}>Complexidade:</label>label>
                                      <select
                                                    value={complexidade}
                                                    onChange={(e) => setComplexidade(e.target.value)}
                                                    style={{
                                                                    width: '100%',
                                                                    padding: '12px',
                                                                    border: '2px solid #eee',
                                                                    borderRadius: '6px',
                                                                    fontSize: '14px',
                                                                    boxSizing: 'border-box'
                                                    }}
                                                  >
                                                  <option value="baixa">Baixa (Simples)</option>option>
                                                  <option value="media">Média (Normal)</option>option>
                                                  <option value="alta">Alta (Complexa)</option>option>
                                      </select>select>
                          </div>div>
                
                        <button
                                    onClick={calcularOrcamento}
                                    style={{
                                                  width: '100%',
                                                  padding: '14px',
                                                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                  color: 'white',
                                                  border: 'none',
                                                  borderRadius: '6px',
                                                  fontSize: '16px',
                                                  fontWeight: '600',
                                                  cursor: 'pointer',
                                                  transition: 'transform 0.2s',
                                                  marginBottom: '20px'
                                    }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                  >
                                  💰 Calcular Orçamento
                        </button>button>
                
                  {orcamento && (
                    <div style={{
                                  background: '#f0f9ff',
                                  border: '2px solid #0ea5e9',
                                  borderRadius: '8px',
                                  padding: '20px',
                                  marginTop: '20px'
                    }}>
                                <h2 style={{
                                    color: '#0369a1',
                                    marginTop: '0',
                                    marginBottom: '15px',
                                    fontSize: '18px'
                    }}>Orçamento Gerado</h2>h2>
                                <div style={{ marginBottom: '12px' }}>
                                              <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Número da Piscina</p>p>
                                              <p style={{ margin: '0', color: '#333', fontSize: '16px', fontWeight: '600' }}>{orcamento.numero}</p>p>
                                </div>div>
                                <div style={{ marginBottom: '12px' }}>
                                              <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Tamanho</p>p>
                                              <p style={{ margin: '0', color: '#333', fontSize: '16px', fontWeight: '600' }}>{orcamento.tamanho} m²</p>p>
                                </div>div>
                                <div style={{ marginBottom: '12px' }}>
                                              <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>Complexidade</p>p>
                                              <p style={{ margin: '0', color: '#333', fontSize: '16px', fontWeight: '600', textTransform: 'capitalize' }}>{orcamento.complexidade}</p>p>
                                </div>div>
                                <div style={{
                                    background: 'white',
                                    padding: '15px',
                                    borderRadius: '6px',
                                    marginTop: '15px',
                                    textAlign: 'center',
                                    border: '2px solid #0ea5e9'
                    }}>
                                              <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>Valor Total</p>p>
                                              <p style={{ margin: '0', color: '#0ea5e9', fontSize: '32px', fontWeight: '700' }}>{orcamento.valor}</p>p>
                                </div>div>
                    </div>div>
                        )}
                </div>div>
        </div>div>
      );
}</select>
