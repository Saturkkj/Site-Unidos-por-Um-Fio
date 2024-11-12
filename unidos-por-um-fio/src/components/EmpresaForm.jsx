import React, { useState } from 'react';
import './DoadorForm.css';

const EmpresaForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    cnpj: '',
    nomeInstituicao: ''
  });
  const [cnpjError, setCnpjError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Função para formatar CNPJ
  const formatCNPJ = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .substr(0, 18);
  };

  const validateCNPJ = async (cnpj) => {
    const cleanCNPJ = cnpj.replace(/\D/g, '');
    
    if (cleanCNPJ.length !== 14) {
      setCnpjError('CNPJ deve ter 14 dígitos');
      return false;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cleanCNPJ}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });

      const data = await response.json();

      if (!response.ok) {
        setCnpjError('CNPJ inválido');
        return false;
      }

      // Preenche o nome da instituição automaticamente
      setFormData(prev => ({
        ...prev,
        nomeInstituicao: data.razao_social || prev.nomeInstituicao
      }));
      
      setCnpjError('');
      return true;
    } catch (error) {
      console.error('Erro ao validar CNPJ:', error);
      setCnpjError('Erro ao validar CNPJ. Tente novamente.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    
    if (name === 'cnpj') {
      const formattedCNPJ = formatCNPJ(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedCNPJ
      }));

      // Valida o CNPJ quando tem 14 dígitos
      if (value.replace(/\D/g, '').length === 14) {
        await validateCNPJ(value);
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Valida o CNPJ antes de enviar
    const isValid = await validateCNPJ(formData.cnpj);
    if (!isValid) {
      return;
    }

    console.log('Dados da empresa:', formData);
    onClose();
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2 className="form-title" style={{ color: 'var(--purple-primary)' }}>Cadastro de Empresa</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cnpj" className="form-label">CNPJ</label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              className={`form-input ${cnpjError ? 'error' : ''}`}
              maxLength={18}
              required
            />
            {cnpjError && <p className="error-message">{cnpjError}</p>}
            {isLoading && <p className="loading-message">Validando CNPJ...</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="nomeInstituicao" className="form-label">Nome da Instituição</label>
            <input
              type="text"
              id="nomeInstituicao"
              name="nomeInstituicao"
              value={formData.nomeInstituicao}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div className="form-buttons">
            <button
              type="button"
              onClick={onClose}
              className="btn-cancel"
              disabled={isLoading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-submit"
              disabled={isLoading || cnpjError}
            >
              {isLoading ? 'Validando...' : 'Cadastrar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpresaForm;