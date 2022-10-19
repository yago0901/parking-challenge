import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Modal from "react-modal";
import {
  Container,
  Toggle,
  ToggleItem,
  LinkStyle,
  ContainerInput,
  Label,
  Input,
  ButtonOut,
  ButtonPayment,
  Error,
  ModalStyle,
  ModalText,
  History,
  Back,
  ModalTitle,
  ImageModal,
  SuccessText,
} from "./styles";
import Header from "../../../components/Header";
import Success from "../../../assets/round-done-button.svg";
import Alert from "../../../assets/ic_alert.svg";

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
    <div className="container">
      <Header />
      <Container>
        <Toggle>
          <Link to="/" style={LinkStyle}>
            <ToggleItem ativo={false}>Entrada</ToggleItem>
          </Link>
          <Link to="/saida" style={LinkStyle}>
            <ToggleItem ativo={true}>Saída</ToggleItem>
          </Link>
        </Toggle>

        <Label>Número da plate:</Label>
        <ContainerInput>
          <Input
            maxLength={8}
            placeholder="AAA-000"
            value={plate}
            onChange={(event) => handleInput(event)}
          />
          <Error ativo={error}>
            {" "}
            <img src={Alert} alt="" width={20} />
            Um erro ocorreu, insira uma plate válida{" "}
          </Error>

          <ButtonPayment ativo={ativo} onClick={handleOpenPayModal}>
            PAGAMENTO
          </ButtonPayment>
          <ButtonOut ativo={ativo} onClick={handleOpenOutModal}>
            SAÍDA
          </ButtonOut>
          <History onClick={handleHistory}>VER HISTORICO</History>

          <Modal
            ariaHideApp={false}
            isOpen={paymentIsOpen}
            style={ModalStyle}
            onRequestClose={handleCloseModal}
          >
            <ModalText>Confirma o pagamento da plate abaixo?</ModalText>
            <ModalTitle>{plate}</ModalTitle>
            <ButtonPayment ativo={ativo} onClick={handlePayment}>
              PAGAMENTO
            </ButtonPayment>
            <Back onClick={handleCloseModal}>Voltar</Back>
          </Modal>

          <Modal
            ariaHideApp={false}
            isOpen={outlIsOpen}
            style={ModalStyle}
            onRequestClose={handleCloseModal}
          >
            <ModalText>Confirma a saída do veiculo da plate abaixo?</ModalText>
            <ModalTitle>{plate}</ModalTitle>
            <ButtonPayment ativo={ativo} onClick={handleOut}>
              Liberar Saída
            </ButtonPayment>
            <Back onClick={handleCloseModal}>Voltar</Back>
          </Modal>

          <Modal
            isOpen={success}
            style={ModalStyle}
            onRequestClose={handleCloseModal}
          >
            <ImageModal src={Success} alt="" />
            <SuccessText>{successText}</SuccessText>
          </Modal>
        </ContainerInput>
      </Container>
    </div>
  );
}
