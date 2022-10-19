import "bootstrap/dist/css/bootstrap.min.css";
import * as C from "../../../styles";
import "./Data.css";
import NavbarComp from "../../navbar";
import { Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../modal";
import axios from "axios";
import { Button1 } from "../../button";

export default function Data() {
  const [titleModal, settitleModal] = useState("mensagem");
  const [messageModal, setmessageModal] = useState("mensagem2");
  const [open, setOpen] = useState(false);

  const [hist, setHist] = useState([]);

  useEffect(() => {
    axios
      .get("https://parking-lot-to-pfz.herokuapp.com/parking/AaA-4444")
      .then((response) => {
        setHist(response.data);
      })

      .catch(() => {
        console.log("Deu tudo errado");
      });
  }, []);

  let histCar = hist.filter(function (e) {
    return e.reservation === 62e319;
  });

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
                <Link to="/saida">
                  <C.Rules
                    size="15px"
                    color="#000000"
                    onClick={() => setOpen(true)}
                  >
                    Voltar
                  </C.Rules>
                </Link>
                {hist.map((hist, key) => {
                  return (
                    <Button1 bgColor="tranparent" color="black" key={key}>
                      <C.Flex gap="0px" marginLeft="15px">
                        <C.Flex gap="0px" direction="column">
                          <C.Flex
                            marginLeft="15px"
                            marginTop="0px"
                            justify="start"
                          >
                            <C.Typography size="12px" color="#9B9B9B">
                              Tempo atual
                            </C.Typography>
                          </C.Flex>
                          <C.Flex
                            marginLeft="15px"
                            marginTop="0px"
                            justify="start"
                          >
                            {hist.time}
                          </C.Flex>
                        </C.Flex>
                        <C.Flex gap="0px" direction="column">
                          <C.Flex
                            marginLeft="15px"
                            marginTop="0px"
                            justify="start"
                          >
                            <C.Typography size="12px" color="#9B9B9B">
                              Pagamento
                            </C.Typography>
                          </C.Flex>
                          <C.Flex justify="start">{hist.plate}</C.Flex>
                        </C.Flex>
                      </C.Flex>
                    </Button1>
                  );
                })}
              </C.CardDesc>
            </C.CardGeral>
          </Container>
        </C.Flex>
      </center>
    </C.Container>
  );
}
