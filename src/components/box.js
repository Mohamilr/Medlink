import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Box = ({ results, lat, lng }) => {

  const direction = async (lat, lng, destLat, destLng) => {
    try {
      const response = await fetch(
        `https://api.tomtom.com/routing/1/calculateRoute/${lat}%2C${lng}%3A${destLat}%2C${destLng}/json?routeType=fastest&traffic=true&avoid=ferries&travelMode=car&key=ciIsGdG3irXcWG9ukyhZfMvZ0aZUbnkU`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      const lines = [];
      data.routes[0].legs[0].points.map((line) => {
        const arr = Object.values(line);
        lines.push(arr);
      });

      localStorage.setItem("points", JSON.stringify(lines));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {results &&
        results.map((data, index) => (
            <NavLink key={index} to={`/details/${data.name}`}>
          <p onClick={() => direction(lat, lng, data.lat, data.lng)}>
            {data.name}
          </p>
            </NavLink>
        ))}
    </div>
  );
};

export default Box;
