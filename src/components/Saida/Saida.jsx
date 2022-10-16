import "bootstrap/dist/css/bootstrap.min.css";
import * as C from "../../styles";
import "./Saida.css";
import NavbarComp from "../navbar";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Input } from "../input";
import { Button1 } from "../button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [placa, setPlaca] = useState([]);

  const handleSubmit = () => {
    console.log(placa);
  };

  const handlePlaca = (value) => {
    setPlaca(value);
  };

  return (
    <C.Container className="App">
      <NavbarComp />
      <Card.Header>
        <Card.Body>
          <center>
            <Container className="App-box">
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
              <Card className="App-card">
                <Card.Body>
                  <Form.Label className="App-text">Número da placa:</Form.Label>
                  <Input
                    id="texto"
                    placeholder="AAA-0000"
                    onChange={(value) => handlePlaca(value)}
                  />
                  <Button1 bgColor="#A769B2" onClick={handleSubmit}>
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
                    <C.Typography size="15px" color="#00BCD4">
                      VER HISTÓRICO
                    </C.Typography>
                  </C.Flex>
                </Card.Body>
              </Card>
            </Container>
          </center>
        </Card.Body>
      </Card.Header>
    </C.Container>
  );
}
