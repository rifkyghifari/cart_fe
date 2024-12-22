import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Cart from "../../components/Cart";
import SummaryCart from "../../components/SummaryCart";
import Navbar from "../../components/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <DefaultLayout>
        <Cart />
        <SummaryCart />
      </DefaultLayout>
    </>
  );
};

export default Landing;
