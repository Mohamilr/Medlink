import React from "react";
import TeamInfo from "../../shared/teamArray";
import "./team.css";

const Team = () => {
  return (
    <div className="team-cont">
      {TeamInfo.map((team) => (
        <div className="team">
          <img src={team.img} alt={team.name}></img>
          <p className='name'>{team.name}</p>
          <p>{team.role}</p>
          <a className="mail" href={`mailto:${team.email}`}>Contact</a>
          <div className="social">
            <a href={team.github} target='_blank' rel='noopener noreferrer'>
              <i className="fab social-icons fa-github"></i>
            </a>
            <a href={team.twitter} target='_blank' rel='noopener noreferrer'>
              <i className="fab social-icons fa-twitter"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
