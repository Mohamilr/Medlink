import React from "react";
import TeamInfo from "../../shared/teamArray";
import "./team.css";

const Team = () => {
  return (
    <div className="team-cont">
      {TeamInfo.map((team) => (
        <div className="team">
          <img src={team.img}></img>
          <p>{team.name}</p>
          <p>{team.role}</p>
          <a mailto={team.role}>{`${team.email}`}</a>
          <div className="social">
            <a href={team.github}>
              <i className="fab social-icons fa-github"></i>
            </a>
            <a href={team.twitter}>
              <i className="fab social-icons fa-twitter"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
