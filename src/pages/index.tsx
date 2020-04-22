import { NextPageContext } from "next";
import Head from "next/head";
import React from "react";
import Banner from "../containers/Banner/Banner";
import { Layout } from "../layout";

function home({ stores }) {
  console.log(stores);
  return (
    <>
      <Head>
        <title>Christian Quispe | PORTFOLIO</title>
      </Head>
      <Layout>
        <Banner />
      </Layout>
    </>
  );
}
home.getInitialProps = ({ store }: NextPageContext) => {
  const { dispatch } = store;
  dispatch({
    type: "ADD_GITHUB_PROJECTS",
    payload: ["items"],
  });
  return {};
};

export default home;
