import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Modal from "react-modal";
import * as C from "./styles";
import Header from "../../../components/Header";
import Success from "../../img/round-done-button.svg";
import Alert from "../../img/ic_alert.svg";

export default function Entrance() {
  const [plate, setPlate] = useState("");
  const [ativo, setAtivo] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleInput(event) {
    let plateText = event.target.value;
    setPlate(plateText);

    let plateLength = plate.length + 1;

    if (plateLength >= 3) {
      setAtivo(true);
      setError(false);
    } else if (plateLength < 3) {
      setAtivo(false);
    }
  }

  async function handleSubmit() {
    if (ativo === false) {
      return;
    } else {
      await axios
        .post("https://parking-lot-to-pfz.herokuapp.com/parking", {
          plate: plate,
        })
        .then(() => {
          handleOpenModal();
          setError(false);
        })
        .catch((err) => {
          setError(true);
          console.error("Algo deu errado" + err);
        });
    }
  }

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <C.Container>
      <Header />
      <C.Main>
        <C.Botoes>
          <Link to="/" style={C.LinkStyle}>
            <C.Botao ativo={true}>Entrada</C.Botao>
          </Link>
          <Link to="/saida" style={C.LinkStyle}>
            <C.Botao ativo={false}>Saída</C.Botao>
          </Link>
        </C.Botoes>

        <C.Text>Número da placa:</C.Text>
        <C.ContainerInput>
          <C.Input
            maxLength={8}
            placeholder="AAA-0000"
            ativo={error}
            value={plate}
            onChange={(event) => handleInput(event)}
          />
          <C.Error ativo={error}>
            {" "}
            <img src={Alert} alt="" width={20} />
            Erro! Insira uma placa válida{" "}
          </C.Error>
          <C.Button ativo={ativo} onClick={handleSubmit}>
            CONFIRMAR ENTRADA
          </C.Button>
          <Modal
            isOpen={modalIsOpen}
            style={C.ModalStyle}
            onRequestClose={handleCloseModal}
          >
            <img src={Success} alt="Sucesso" width={60} />
            <C.ModalText>Registrado!</C.ModalText>
          </Modal>
        </C.ContainerInput>
      </C.Main>
    </C.Container>
  );
}
