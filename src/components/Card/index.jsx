import React from "react";
import { Link } from "react-router-dom";

import { Container, CardData, CardTitle, LinkStyle } from "./styles";

export default function Card({ plate, paid, time, reservation }) {
  if (paid === true) {
    return (
      <Link
        to={`/data-plate?plate=${plate}&reservation=${reservation}`}
        style={LinkStyle}
      >
        <Container id="card">
          <div>
            <CardTitle>Tempo Atual</CardTitle>
            <CardData>{time}</CardData>
          </div>
          <div>
            <CardTitle>Pagamento</CardTitle>
            <CardData>Pago</CardData>
          </div>
        </Container>
      </Link>
    );
  } else if (paid === false) {
    return (
      <Link
        to={`/data-plate?plate=${plate}&reservation=${reservation}`}
        style={LinkStyle}
      >
        <Container data-testid="card">
          <div>
            <CardTitle>Tempo Atual</CardTitle>
            <CardData>{time}</CardData>
          </div>
          <div>
            <CardTitle>Pagamento</CardTitle>
            <CardData>-</CardData>
          </div>
        </Container>
      </Link>
    );
  } else {
    return <h1 data-testid="error">Algo deu errado</h1>;
  }
}
