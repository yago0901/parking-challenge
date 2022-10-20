import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../img/avatar_parking.png";
import MenuImage from "../img/menu.svg";
import CloseImage from "../img/close.svg";

import { HeaderContainer, NavMenu, Close, LogoMenu, Link } from "./styles";

export default function Header() {
  const [Sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!Sidebar);
  let navigate = useNavigate();

  function handleHome() {
    navigate("/");
  }

  function handleSaida() {
    navigate("/");
  }

  function handleExit() {
    navigate("/saida");
  }
  return (
    <HeaderContainer>
      <img src={Logo} onClick={handleHome} alt="Logo Parking" />
      <LogoMenu
        src={MenuImage}
        onClick={showSidebar}
        ativo={Sidebar}
        width="36"
      />
      <Close
        src={CloseImage}
        onClick={showSidebar}
        ativo={Sidebar}
        width="36"
      />
      <NavMenu ativo={Sidebar}>
        <ul>
          <Link onClick={handleSaida}>Entrada</Link>
          <Link onClick={handleExit}>Saída</Link>
        </ul>
      </NavMenu>
    </HeaderContainer>
  );
}
