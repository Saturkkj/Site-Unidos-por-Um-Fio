import React from 'react';
import './DoadorForm.css'; // Reaproveitando os estilos

const SelectTypeModal = ({ onClose, onSelectDoador, onSelectEmpresa }) => {
  return (
    <div className="form-overlay">
      <div className="form-container text-center">
        <h2 className="form-title">Como você gostaria de se inscrever?</h2>
        
        <div className="form-buttons-selection">
          <button
            onClick={onSelectDoador}
            className="btn-select-type"
          >
            Como Doador
          </button>
          
          <button
            onClick={onSelectEmpresa}
            className="btn-select-type"
          >
            Como Empresa
          </button>
        </div>
        
        <button
          onClick={onClose}
          className="btn-cancel mt-4"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default SelectTypeModal;