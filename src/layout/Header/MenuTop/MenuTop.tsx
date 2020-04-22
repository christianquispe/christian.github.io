import React, { useState } from "react";
import "./MenuTop.less";
export const MenuTop: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <div className="MenuTop">
      <h1 onClick={handleClick} className="MenuTop__title">
        Christian Quispe Camasca
      </h1>
      <p
        className={`MenuTop__subtitle ${
          active ? "MenuTop__subtitle--active" : ""
        }`}
      >
        Front End Developer
      </p>
    </div>
  );
};
