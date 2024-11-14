import React, { useState } from 'react';
import TeamCarousel from './components/TeamCarousel';
import DoadorForm from './components/DoadorForm';
import EmpresaForm from './components/EmpresaForm';
import SelectTypeModal from './components/SelectTypeModal';
import { Instagram } from 'lucide-react';

function App() {
  const [showDoadorForm, setShowDoadorForm] = useState(false);
  const [showEmpresaForm, setShowEmpresaForm] = useState(false);
  const [showSelectTypeModal, setShowSelectTypeModal] = useState(false);

  const handleDoadorSelect = () => {
    setShowSelectTypeModal(false);
    setShowDoadorForm(true);
  };

  const handleEmpresaSelect = () => {
    setShowSelectTypeModal(false);
    setShowEmpresaForm(true);
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <img src="/assets/Imagem1.png" className="logo" alt="Logo Unidos por Um Fio" />
          <div className="contact-wrapper">
            <span className="phone-number">(11) 99999-9999</span>
            <div className="social-link-wrapper">
              <Instagram className="social-icon" size={20} />
              <a href="#" className="social-link">@unidosporumfio</a>
            </div>
          </div>
          <button 
            className="btn-inscreva-se"
            onClick={() => setShowSelectTypeModal(true)}
          >
            INSCREVA-SE
          </button>
        </div>
      </header>

      <section className="section hero">
        <div className="overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Quer saber para onde estão indo suas doações?</h1>
            <p>
              Está no lugar certo! Estamos aqui para mostrar cada detalhe de suas
              doações, desde o seu recebimento até a chegada em seu destino final.
              Vamos lá?
            </p>
          </div>
          <div className="hero-image">
            <img src="/assets/imagem_2024-11-04_200610820 (1).png" alt="Imagem relacionada" />
          </div>
        </div>
      </section>

      <section className="section about">
        <h2>Movidos pela empatia e pelo consumo consciente</h2>
        <p>
          Somos uma empresa dedicada a apoiar seres humanos e garantir a
          transparência nos processos de doações.
        </p>
        <TeamCarousel />
        <button className="btn-conheca-mais">Conheça mais!</button>
      </section>

      <section className="section donation-options">
        <div className="option">
          <h3>Se cadastrando como um doador</h3>
          <p>Terá acesso ao seu produto e todas as informações dele.</p>
          <button 
            className="btn-doar"
            onClick={() => setShowDoadorForm(true)}
          >
            INSCREVER-ME COMO UM DOADOR
          </button>
        </div>

        <div className="option">
          <h3>Se cadastrando como uma empresa</h3>
          <p>Registra os dados do doador e da doação no site.</p>
          <button 
            className="btn-empresa"
            onClick={() => setShowEmpresaForm(true)}
          >
            INSCREVER-ME COMO UMA EMPRESA
          </button>
        </div>
      </section>

      <section className="section partners">
        <h2>Ainda em dúvida? Se liga nas empresas que já estão com a gente!</h2>
        <p>
          Conectamos generosidade a impacto: sua empresa, nossa plataforma, e
          doações que chegam mais longe.
        </p>
        <div className="logos">
          <img src="/src/assets/logo1.png" alt="Logo 1" />
          <img src="/src/assets/logo2.png" alt="Logo 2" />
          <img src="/src/assets/logo3.png" alt="Logo 3" />
        </div>
      </section>

      <footer className="footer">
        Unidos por Um Fio
      </footer>

      {showSelectTypeModal && (
        <SelectTypeModal 
          onClose={() => setShowSelectTypeModal(false)}
          onSelectDoador={handleDoadorSelect}
          onSelectEmpresa={handleEmpresaSelect}
        />
      )}

      {showDoadorForm && (
        <DoadorForm onClose={() => setShowDoadorForm(false)} />
      )}

      {showEmpresaForm && (
        <EmpresaForm onClose={() => setShowEmpresaForm(false)} />
      )}
    </>
  )
}

export default App