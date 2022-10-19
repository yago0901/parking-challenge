import "bootstrap/dist/css/bootstrap.min.css";
import * as C from "../../../styles";
import "./Saida.css";
import NavbarComp from "../../navbar";
import { Button, Container } from "react-bootstrap";
import { Input } from "../../input";
import { Button1 } from "../../button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../modal";

export default function App() {
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
            <Modal
              open={open}
              titleModal={titleModal}
              messageModal={messageModal}
              handleOpenModal={() => setOpen(false)}
            />
            <C.Flex gap="0px">
              <Link to="/">
                <Button className="App-button bg-transparent text-dark">
                  Entrada
                </Button>
              </Link>
              <Link to="/saida">
                <Button className="App-button bg-transparent text-dark border-bottom">
                  Saída
                </Button>
              </Link>
            </C.Flex>
            <C.CardGeral>
              <C.CardDesc>
                <C.Typography textAlign="left">Número da placa:</C.Typography>
              </C.CardDesc>
              <Input
                value={placa}
                id="texto"
                placeholder="AAA-0000"
                onChange={(value) => handlePlaca(value)}
              />
              <Button1 bgColor="#A769B2" onClick={() => setOpen(true)}>
                PAGAMENTO
              </Button1>
              <Button1
                color="#A769B2"
                border="2px solid #A769B2"
                bgColor="transparent"
                onClick={handleSubmit}
              >
                SAÍDA
              </Button1>
              <C.Flex>
                <Link to="/data" placa={placa}>
                  <C.Rules
                    size="15px"
                    color="#00BCD4"
                    onClick={() => setOpen(true)}
                  >
                    VER HISTÓRICO
                  </C.Rules>
                </Link>
              </C.Flex>
            </C.CardGeral>
          </Container>
        </C.Flex>
      </center>
    </C.Container>
  );
}
