import React from "react";
import "./Header.less";
import { MenuTop } from "./MenuTop/MenuTop";
export const Header: React.FC = (props) => {
  return (
    <header>
      <MenuTop />
    </header>
  );
};
