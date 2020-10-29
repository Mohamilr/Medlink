import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {

  const [menuactive, setMenuactive] = useState(false);

  return (
    <>
      <nav className="nav">

        <div className="navbar">

          <div className="logo">

            <Link to="/">
              <img src={'https://res.cloudinary.com/project-s/image/upload/v1603972199/Logo_pp1akc.png'} alt="medlink logo" />
            </Link>

          </div>

          <div className="menu" id={menuactive === true ? 'dl' : 'dn' }>

            <ul>

              <li><Link to="/" className={props.home}>Home</Link></li>

              <li><Link to="/about" className={props.about}>About Us</Link></li>

              <li><Link to="/history" className={props.history}>Search History</Link></li>

            </ul>

          </div>

          <div className="mobile-menu">

            <div className="icon" onClick={() => setMenuactive(!menuactive)}>

              <i className="fa fa-bars" aria-hidden="true"></i>

            </div>

          </div>

        </div>

      </nav>

    </>
  )
}

export default Nav;
