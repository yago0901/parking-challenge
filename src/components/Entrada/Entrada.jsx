import "bootstrap/dist/css/bootstrap.min.css";
import * as C from "../../styles";
import "./Entrada.css";
import NavbarComp from "../navbar";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Input } from "../input";
import { Button1 } from "../button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Entrada() {
  const [placa, setPlaca] = useState([]);
  //const [cor, setCor] = useState("#c3c3c3");

  const handleSubmit = () => {
    console.log(placa);
  };

  const handlePlaca = (value) => {
    setPlaca(value);
  };

  return (
    <C.Container className="App">
      <NavbarComp />
      <C.Flex>
        <Container className="App-box">
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
          <center>
            <Card className="App-card">
              <Card.Body>
                <Form.Label className="App-text">Número da placa:</Form.Label>
                <Input
                  id="texto"
                  placeholder="AAA-0000"
                  onChange={(value) => handlePlaca(value)}
                />
                <Button1 onClick={handleSubmit}>CONFIRMAR ENTRADA</Button1>
              </Card.Body>
            </Card>
          </center>
        </Container>
      </C.Flex>
    </C.Container>
  );
}
