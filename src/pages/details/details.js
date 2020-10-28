import React from "react";
import MapRenderer from '../../components/map/map';
import Footer from "../../components/footer/footer";

const Details = ({ match }) => {
  console.log(match)
  return (
    <main>
      <MapRenderer />
      <Footer />
    </main>
  );
};

export default Details;
