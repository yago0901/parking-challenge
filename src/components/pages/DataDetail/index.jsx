import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Header from "../../../components/Header";
import {
  Main,
  Plate,
  BackDetail,
  SpanDetail,
  DataText,
  Container,
  Loading,
  LoadingText,
} from "./styles";
import Seta from "../../../assets/arrow_l.svg";
import LoadingImage from "../../../assets/loading.svg";

export default function DataDetail() {
  const [carsData, setCarsData] = useState();
  const urlParams = new URLSearchParams(window.location.search);
  const paramPlate = urlParams.get("plate");
  const paramReserv = urlParams.get("reservation");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPlate = urlParams.get("plate");

    let getCars = async () => {
      let res = await axios
        .get(`https://parking-lot-to-pfz.herokuapp.com/parking/${paramPlate}`)
        .catch((err) => {
          alert("Insira um dado valido");
          console.error("Algo deu errado" + err);
        });
      console.log(res);
      setCarsData(res.data);
    };
    getCars();
  }, []);

  if (carsData) {
    return carsData.map((car) => {
      if (car.reservation === paramReserv && car.paid === true) {
        return (
          <Container>
            <Header />
            <Main>
              <Link to={`/data?plate=${paramPlate}`}>
                <BackDetail src={Seta} />
              </Link>
              <SpanDetail>Placa</SpanDetail>
              <Plate>{car.plate}</Plate>
              <SpanDetail>Status</SpanDetail>
              <DataText>Saiu</DataText>
              <SpanDetail>Tempo Atual</SpanDetail>
              <DataText>{car.time}</DataText>
              <SpanDetail>Pagamento</SpanDetail>
              <DataText>Pago</DataText>
            </Main>
          </Container>
        );
      } else if (car.reservation === paramReserv && car.paid === false) {
        return (
          <Container>
            <Header />
            <Main>
              <Link to={`/data?plate=${paramPlate}`}>
                <BackDetail src={Seta} />
              </Link>
              <SpanDetail>Placa</SpanDetail>
              <Plate>{car.plate}</Plate>
              <SpanDetail>Status</SpanDetail>
              <DataText>Estacionado</DataText>
              <SpanDetail>Tempo Atual</SpanDetail>
              <DataText>{car.time}</DataText>
              <SpanDetail>Pagamento</SpanDetail>
              <DataText>-</DataText>
            </Main>
          </Container>
        );
      }
    });
  } else {
    return (
      <Loading data-testid="loading">
        <img src={LoadingImage} alt="" />
        <LoadingText>Carregando..</LoadingText>
      </Loading>
    );
  }
}
