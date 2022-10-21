import React, { useState, useEffect } from "react";
import * as C from "./styles";

import axios from "axios";
import { Link } from "react-router-dom";

import Seta from "../../img/arrow_l.svg";
import LoadingImage from "../../img/loading.svg";

import Header from "../../../components/Header";
import Card from "../../../components/Card";

export default function Data() {
  const [carsData, setCarsData] = useState();
  //const urlParams = new URLSearchParams(window.location.search);
  //const paramPlate = urlParams.get("plate");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramPlate = urlParams.get("plate");
    let getCars = async () => {
      let res = await axios
        .get(`https://parking-lot-to-pfz.herokuapp.com/parking/${paramPlate}`)
        .catch((err) => {
          alert(`insira um dado valido ${paramPlate} `);
          console.error("Algo deu errado" + err);
        });
      console.log(res);
      setCarsData(res.data);
    };
    getCars();
  }, []);

  if (carsData) {
    return (
      <C.Container>
        <C.ContainerData>
          <Header />
          <Link to={`/saida`} style={C.LinkStyle}>
            <C.PlacaContainer>
              <C.SetaVoltar src={Seta} />
              <C.Placa> Placa {carsData[0].plate}</C.Placa>
            </C.PlacaContainer>
          </Link>
          <ul>
            {carsData.map((car, index) => (
              <Card
                key={index}
                plate={carsData[0].plate}
                time={car.time}
                paid={car.paid}
                reservation={car.reservation}
              />
            ))}
          </ul>
        </C.ContainerData>
      </C.Container>
    );
  } else {
    return (
      <C.Loading data-testid="Loading">
        <img src={LoadingImage} alt="" />
        <C.LoadingText>Carregando..</C.LoadingText>
      </C.Loading>
    );
  }
}
