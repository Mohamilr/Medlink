import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";

const Box = ({ results, lat, lng }) => {
  const [points, setPoints] = useState([]);
  const direction = async (lat, lng, destLat, destLng) => {
    try {
      const response = await fetch(
        `https://api.tomtom.com/routing/1/calculateRoute/${lat}%2C${lng}%3A${destLat}%2C${destLng}/json?routeType=fastest&traffic=true&avoid=ferries&travelMode=car&key=ciIsGdG3irXcWG9ukyhZfMvZ0aZUbnkU`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log("initial", data);

      //   if (!data.routes) {
      //       return console.log('not found')
      //   }

      const lines = []
      data.routes[0].legs[0].points.map(line => {
        const arr = Object.values(line)
        lines.push(arr);
      })

      setPoints(lines);
      console.log('lines', lines);

      // // array to store latitude and longitude
      // const latAndLng = []
      // data.results.map((latlng) => {
      //    return latAndLng.push({
      //         lat: latlng.position.lat,
      //         lng: latlng.position.lon,
      //         name: latlng.poi.name,
      //         address: latlng.address.freeformAddress,
      //     })
      // })
      // setResults(latAndLng)
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {results &&
        results.map((data, index) => (
          //   <NavLink key={index} to={`/details/${data.name}`}>
          <p onClick={() => direction(lat, lng, data.lat, data.lng)}>
            {data.name}
          </p>
          //   </NavLink>
        ))}
      <Map center={[6.4550575, 3.3941795]} className="mapLayout" zoom={10}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points && points.map((line, index) => (
            <Polyline key={index} positions={[line]} color={'green'}/>
        ))}
        {results &&
          results.map((data, index) => (
            <Marker
              key={index}
              marker_index={index}
              position={[data.lat, data.lng]}
            >
              <Popup>{`${data.name}, ${data.address}`}</Popup>
            </Marker>
          ))}
      </Map>
    </div>
  );
};

export default Box;
