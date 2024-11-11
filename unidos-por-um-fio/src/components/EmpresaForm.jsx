import React, { useState } from 'react';
import './DoadorForm.css'; // Podemos reutilizar os mesmos estilos

const EmpresaForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    cnpj: '',
    nomeInstituicao: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da empresa:', formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2 className="form-title">Cadastro de Empresa</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cnpj" className="form-label">CNPJ</label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              className="form-input"
              required
            />
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
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpresaForm;