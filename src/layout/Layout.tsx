import { Layout as $Layout } from "antd";
import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";
import Main from "./Main";
export const Layout: React.FC = (props) => {
  return (
    <$Layout>
      <Header></Header>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </$Layout>
  );
};
