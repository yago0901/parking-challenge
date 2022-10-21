import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { useQuery } from "../../../hooks/useQuery";

import axios from "axios";
import { Link } from "react-router-dom";

import Seta from "../../img/arrow_l.svg";
import LoadingImage from "../../img/loading.svg";

import Header from "../../../components/Header";
import Card from "../../../components/Card";

export default function Data() {
  const [carsData, setCarsData] = useState();
  const query = useQuery();
  const plate = query.get("plate");

  useEffect(() => {
    //const urlParams = new URLSearchParams(window.location.search);
    //const paramPlate = urlParams.get("plate");
    if (plate) {
      let getCars = async () => {
        let res = await axios
          .get(`https://parking-lot-to-pfz.herokuapp.com/parking/${plate}`)
          .catch((err) => {
            alert(`insira um dado valido ${plate} `);
            console.error("Algo deu errado" + err);
          });
        console.log(plate);
        setCarsData(res.data);
      };
      getCars();
    }
  }, [plate]);

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
      <C.Loading data-testid="loading">
        <img src={LoadingImage} alt="" />
        <C.LoadingText>Carregando..</C.LoadingText>
      </C.Loading>
    );
  }
}
