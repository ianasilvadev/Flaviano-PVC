import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../Modal Agendamento/Agendamento.module.css';

const Agendamento = ({onClose}) => {

  function fechaModal(){
    onClose()
  }

  return (
    <div className={`modal show ${styles.modalAgendamento}`}>
      <Modal.Dialog className={styles.modalDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Agendamento</Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.agendamentoCampos}>
          <div className={styles.sectionTitle}>Dados Pessoais</div>
          <div className={styles.camposInline}>
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Nome</label>
              <input id="nome" type="text" placeholder="Digite seu nome"/>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="text" placeholder="Digite seu e-mail"/>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" type="text" placeholder="Digite seu telefone"/>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.sectionTitle}>Endereço</div>
          <div className={styles.camposInline}>
            <div className={styles.inputGroup}>
              <label htmlFor="endereco">Cep</label>
              <input id="endereco" type="text" placeholder="Digite seu cep"/>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="numero">Número</label>
              <input id="numero" type="text" placeholder="Digite o número"/>
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="referencia">Ponto de referência</label>
            <input id="referencia" type="text" placeholder="Digite um ponto de referência"/>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={fechaModal} className={styles.btnAgendamento}>Fechar</Button>
          <Button className={styles.btnAgendamento}>Agendar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Agendamento;
