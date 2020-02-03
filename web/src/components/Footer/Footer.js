import React from "react";

import "./Footer.scss";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <div className="footer--primary">
          <nav>
            <ul className="footer--primary-nav">
              <li>Domain</li>
              <li>Help</li>
              <li>Contact</li>
              <li>About</li>
              <li>Careers</li>
            </ul>
          </nav>
        </div>
        <div className="footer--secondary">
          <p5>HAHAHAHA</p5>
        </div>
      </footer>
    );
  }
}

export default Footer;
