import { AppBar, Toolbar, styled } from "@mui/material";
import React from "react";
import { LOGO } from "../Constants";

const NavBar = styled(AppBar)`
  background-color: #010101;
  width: 100%;
  height: 7vh;
`;

const Header = () => {
  return (
    <NavBar position="static">
      <Toolbar>
        <img src={LOGO} style={{ width: 40 }} />
      </Toolbar>
    </NavBar>
  );
};

export default Header;
