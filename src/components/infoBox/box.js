import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { detailCoordinate } from "../../actions/detailCoordAction";
import "./box.css";
// import cross from "../../asset/img/medlink-cross.png";

const Box = () => {
  // redux state
  const location = useSelector((state) => state.location);
  const coordinates = useSelector((state) => state.coordinates);
  const dispatch = useDispatch();

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

      // redux action
      dispatch(detailCoordinate(lines));
    } catch (e) {
      console.error(e);
    }
  };

  // const storeDetails = () => {
  //   localStorage.setItem('facname__', data.name);
  //   localStorage.setItem('facadd__', data.address);
  // }

  return (
    <div className="box-cont">
      {coordinates &&
        coordinates.map((data, index) => (
          <NavLink key={index} to={`/details/${data.name}`} onClick={()=>{localStorage.setItem('facname__', data.name); localStorage.setItem('facadd__', data.address);}}>
            {/*location[0] and location[1] are the starting point corrdinates while data.lat and data.lng are the destination coordinates */}
            <div className="box" onClick={() =>
                direction(location[0], location[1], data.lat, data.lng)
              }>
              <div className="box-content">

                <i className="fas fa-cross"></i>

                <p className="box-content_m">
                  <span>
                    <i className="far icons fa-hospital"></i>
                  </span>{" "}
                {`${data.name}`}
                </p>

                <p className="box-content_m">
                  <span>
                    <i className="fas icons fa-map-marker-alt"></i>
                  </span>
                  {`${data.address}`}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
    </div>
  );
};

export default Box;
