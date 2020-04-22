import React from "react";
import "./Banner.less";
const Banner: React.FC = (props) => {
  return (
    <section className="Banner">
      <div className="Banner__containerContent">
        <h2 className="Banner__title">Hola, mi nombre es Christian</h2>
        <p className="Banner__subtitle">Front End Developer</p>
      </div>
    </section>
  );
};
export default Banner;
