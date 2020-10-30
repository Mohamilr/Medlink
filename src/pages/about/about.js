import React from "react";
import Nav from "../../components/nav";
import Footer from '../../components/footer/footer';
import Team from "../../components/team/team";
import "./about.css";

const About = () => {
  return (
    <>
      <Nav about="active" />
      <section className="about-app">
        <div className="about-text">
          <h2>Problem Statement/Purpose</h2>
          <p>
            In Africa, availability of specialist hospitals around neighborhoods
            and environments is not a rare case but is also not public knowledge.
            People know there are hospitals around them but do not know the areas
            of specialization of these hospitals hence they tend to have to circle
            around different hospitals when they have a special case before they
            finally find the one that can attend to them. This could lead to
            further complications or even the worst case of fatality in cases of
            emergencies.
          </p>
        </div>

        <div className="about-text">
          <h2>Solution</h2>
          <p>
            The Medlink platform was built to solve this problem by connecting
            users (patients and responders) to specialist hospitals and phamarcies
            around their vicinity. It is further customized so people can search
            by location and by categories. It also provides full contact details
            of these facilities and a map from the user's location to the chosen
            destination.
          </p>
        </div>
      </section>
      <section className="team-main">
          <h1>MEET THE TEAM</h1>
        <Team />
      </section>
      <Footer />
    </>
  );
};

export default About;
