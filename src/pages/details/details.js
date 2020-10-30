import React from "react";
import MapRenderer from '../../components/map/map';
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav";
import InfoDetails from "../../components/infoDetail/infoDetails";

const Details = () => {
  return (
    <main>
      <Nav />
      <InfoDetails />
      <MapRenderer />
      <Footer />
    </main>
  );
};

export default Details;
