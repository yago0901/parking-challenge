import "bootstrap/dist/css/bootstrap.min.css";
import * as C from "../../../styles";
import "./Entrada.css";
import NavbarComp from "../../navbar";
import { Button, Container } from "react-bootstrap";
import { Input } from "../../input";
import { Button1 } from "../../button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../modal";

export default function Entrada() {
  const [placa, setPlaca] = useState([]);
  const [titleModal, settitleModal] = useState("mensagem");
  const [messageModal, setmessageModal] = useState("mensagem2");
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    console.log(placa);
  };

  const handlePlaca = (value) => {
    setPlaca(value);
  };

  return (
    <C.Container className="App">
      <NavbarComp />
      <center>
        <C.Flex>
          <Container className="App-box">
            <Modal titleModal={titleModal} messageModal={messageModal} />
            <C.Flex gap="0px">
              <Link to="/">
                <Button className="App-button bg-transparent text-dark">
                  Entrada
                </Button>
              </Link>
              <Link to="/saida">
                <Button className="App-button bg-transparent text-dark">
                  Saída
                </Button>
              </Link>
            </C.Flex>
            <C.CardGeral>
              <C.CardDesc>
                <C.Typography textAlign="left">Número da placa:</C.Typography>
              </C.CardDesc>
              <Input
                id="texto"
                placeholder="AAA-0000"
                onChange={(value) => handlePlaca(value)}
              />
              <Button1 onClick={handleSubmit}>CONFIRMAR ENTRADA</Button1>
            </C.CardGeral>
          </Container>
        </C.Flex>
      </center>
    </C.Container>
  );
}
