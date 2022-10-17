import "bootstrap/dist/css/bootstrap.min.css";
import * as C from "../../styles";
import "./Data.css";
import NavbarComp from "../navbar";
import { Button, Container } from "react-bootstrap";
import { Input } from "../input";
import { Button1 } from "../button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../modal";

export default function Data() {
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
            <C.Spacer margin="25px" />
            <C.CardGeral>
              <C.CardDesc>
                <Link to="/">
                  <C.Rules
                    size="15px"
                    color="#000000"
                    onClick={() => setOpen(true)}
                  >
                    Voltar
                  </C.Rules>
                </Link>
              </C.CardDesc>
            </C.CardGeral>
          </Container>
        </C.Flex>
      </center>
    </C.Container>
  );
}
