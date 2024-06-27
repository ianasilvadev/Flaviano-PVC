import React from 'react';
import shape from '../Home/Imagens/Shape.png';
import imgExemplo from '../Home/Imagens/FotoFlaviano.jpg';
import logo from '../Home/Imagens/Logo.png';
import Sobre from '../Sobre/Sobre';
import Servicos from '../Servicos/Servicos';
import styles from './Home.module.css'; 
import Footer from '../Footer/Footer';
import Contato from '../Contato/Contato';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Navbar*/}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={styles.lista}>
          {/* Divisões de li*/}
          <li>Inicio</li>
          <li>Sobre</li>
          <li>Tabela</li>
          <li>Orçamento</li>
          <li>Contato</li>
        </ul>
      </header>{' '}
      {/* Acaba Navbar*/}
      {/* Agendamento de serviço da home*/}
      <div className={styles.agendaServico}>
        <h1 className={styles.titulo}>
          Transformando espaços e
          <br /> elevando conforto <br /> Seu especialista em Forro PVC
        </h1>
        <p className={styles.subtituloServico}>
          Empresa de Forro PVC em Fortaleza
          <br /> especializado em soluções práticas e elegantes para todos os
          ambientes.
        </p>
        <button className={styles.btn}>Agendar serviço</button>
      </div>
      <img src={shape} className={styles.shape} alt="" />
      <div>
        <img className={styles.imagens} src={imgExemplo} alt="" />
      </div>
      {/* Importando outros componentes*/}
      <div className={styles.sobreConteiner}>
        <Sobre />
      </div>
      <div className={styles.servicosConteiner}>
        <Servicos />
      </div>
      <div className={styles.contatoConteiner}>
    <Contato/>
      </div>
      <div className={styles.footerConteiner}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
