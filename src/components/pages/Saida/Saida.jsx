import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Modal from "react-modal";
import * as C from "./styles";
import Header from "../../../components/Header";
import Success from "../../img/round-done-button.svg";
import Alert from "../../img/ic_alert.svg";

export default function Saida() {
  const [plate, setplate] = useState("");
  const [ativo, setAtivo] = useState(false);
  const [error, setError] = useState(false);
  const [outlIsOpen, setOutIsOpen] = useState(false);
  const [paymentIsOpen, setPaymentIsOpen] = useState(false);
  let navigate = useNavigate();
  const [success, setSuccessIsOpen] = useState(false);
  const [successText, setSuccessText] = useState("");

  function handleInput(event) {
    let plateText = event.target.value;
    setplate(plateText);

    let plateLength = plate.length + 1;

    if (plateLength >= 3) {
      setAtivo(true);
    } else if (plateLength < 3) {
      setAtivo(false);
    }
  }

  async function handleOut() {
    if (ativo === false) {
      return;
    } else {
      await axios
        .post(`https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/out`)
        .then(() => {
          setError(false);
          setSuccessText("SAÍDA LIBERADA");
          setSuccessIsOpen(true);
        })
        .catch((error) => {
          setError(true);
          handleCloseModal();
          console.error("ops! ocorreu um erro" + error);
        });
    }
  }

  async function handlePayment() {
    if (ativo === false) {
      return;
    } else {
      await axios
        .post(`https://parking-lot-to-pfz.herokuapp.com/parking/${plate}/pay`)
        .then(() => {
          setError(false);
          setSuccessText("PAGO!");
          setSuccessIsOpen(true);
        })
        .catch((error) => {
          setError(true);
          handleCloseModal();
          console.error("ops! ocorreu um erro" + error);
        });
    }
  }

  async function handleHistory() {
    if (ativo === false) {
      setError(true);
      return;
    } else {
      await axios
        .get(`https://parking-lot-to-pfz.herokuapp.com/parking/${plate}`)
        .then((res) => {
          setError(false);
          navigate(`/data?plate=${plate}`);
        })
        .catch((error) => {
          setError(true);
          console.error("ops! ocorreu um erro" + error);
        });
    }
  }

  function handleOpenPayModal() {
    if (ativo === false) {
      return;
    }
    setPaymentIsOpen(true);
  }

  function handleOpenOutModal() {
    if (ativo === false) {
      return;
    }
    setOutIsOpen(true);
  }

  function handleCloseModal() {
    setOutIsOpen(false);
    setPaymentIsOpen(false);
    setSuccessIsOpen(false);
  }

  return (
    <C.ContainerGeral>
      <Header />
      <C.Container>
        <C.Botoes>
          <Link to="/" style={C.LinkStyle}>
            <C.Botao ativo={false}>Entrada</C.Botao>
          </Link>
          <Link to="/saida" style={C.LinkStyle}>
            <C.Botao ativo={true}>Saída</C.Botao>
          </Link>
        </C.Botoes>

        <C.Text>Número da plate:</C.Text>
        <C.ContainerInput>
          <C.Input
            maxLength={8}
            placeholder="AAA-0000"
            value={plate}
            onChange={(event) => handleInput(event)}
          />
          <C.Error ativo={error}>
            {" "}
            <img src={Alert} alt="" width={20} />
            Um erro ocorreu, insira uma plate válida{" "}
          </C.Error>

          <C.ButtonPayment ativo={ativo} onClick={handleOpenPayModal}>
            PAGAMENTO
          </C.ButtonPayment>
          <C.ButtonOut ativo={ativo} onClick={handleOpenOutModal}>
            SAÍDA
          </C.ButtonOut>
          <C.History onClick={handleHistory}>VER HISTORICO</C.History>

          <Modal
            ariaHideApp={false}
            isOpen={paymentIsOpen}
            style={C.ModalStyle}
            onRequestClose={handleCloseModal}
          >
            <C.ModalText>Confirma o pagamento da plate abaixo?</C.ModalText>
            <C.ModalTitle>{plate}</C.ModalTitle>
            <C.ButtonPayment ativo={ativo} onClick={handlePayment}>
              PAGAMENTO
            </C.ButtonPayment>
            <C.Back onClick={handleCloseModal}>Voltar</C.Back>
          </Modal>

          <Modal
            ariaHideApp={false}
            isOpen={outlIsOpen}
            style={C.ModalStyle}
            onRequestClose={handleCloseModal}
          >
            <C.ModalText>
              Confirma a saída do veiculo da plate abaixo?
            </C.ModalText>
            <C.ModalTitle>{plate}</C.ModalTitle>
            <C.ButtonPayment ativo={ativo} onClick={handleOut}>
              Liberar Saída
            </C.ButtonPayment>
            <C.Back onClick={handleCloseModal}>Voltar</C.Back>
          </Modal>

          <Modal
            isOpen={success}
            style={C.ModalStyle}
            onRequestClose={handleCloseModal}
          >
            <C.ImageModal src={Success} alt="" />
            <C.SuccessText>{successText}</C.SuccessText>
          </Modal>
        </C.ContainerInput>
      </C.Container>
    </C.ContainerGeral>
  );
}
