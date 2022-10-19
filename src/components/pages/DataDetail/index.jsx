import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Header from "../../../components/Header";
import * as C from "./styles";
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
      setCarsData(res.data);
    };
    getCars();
  }, []);

  if (carsData) {
    return carsData.map((car, index) => {
      if (car.reservation === paramReserv && car.paid === true) {
        return (
          <C.Container key={index}>
            <Header />
            <C.Main>
              <Link to={`/data?plate=${paramPlate}`}>
                <C.BackDetail src={Seta} />
              </Link>
              <C.SpanDetail>Placa</C.SpanDetail>
              <C.Plate>{car.plate}</C.Plate>
              <C.SpanDetail>Status</C.SpanDetail>
              <C.DataText>Saiu</C.DataText>
              <C.SpanDetail>Tempo Atual</C.SpanDetail>
              <C.DataText>{car.time}</C.DataText>
              <C.SpanDetail>Pagamento</C.SpanDetail>
              <C.DataText>Pago</C.DataText>
            </C.Main>
          </C.Container>
        );
      } else if (car.reservation === paramReserv && car.paid === false) {
        return (
          <C.Container key={index}>
            <Header />
            <C.Main>
              <Link to={`/data?plate=${paramPlate}`}>
                <C.BackDetail src={Seta} />
              </Link>
              <C.SpanDetail>Placa</C.SpanDetail>
              <C.Plate>{car.plate}</C.Plate>
              <C.SpanDetail>Status</C.SpanDetail>
              <C.DataText>Estacionado</C.DataText>
              <C.SpanDetail>Tempo Atual</C.SpanDetail>
              <C.DataText>{car.time}</C.DataText>
              <C.SpanDetail>Pagamento</C.SpanDetail>
              <C.DataText>-</C.DataText>
            </C.Main>
          </C.Container>
        );
      }
    });
  } else {
    return (
      <C.Loading data-testid="loading">
        <img src={LoadingImage} alt="" />
        <C.LoadingText>Carregando..</C.LoadingText>
      </C.Loading>
    );
  }
}
