import React from 'react';
import NavItem1 from '../header/NavItem1';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="footer-container">
        <div className=" space-outer">
          <div className="logo-box center">
            <img src="./logo.png" alt="logo" className="footer-logo" />
            <div className="quote mt-12">
              "For where two or three are gathered in my name, I am there among
              them" (Matthew 18:20).
            </div>
          </div>
          <div className="footer-box">
            <div className="fbc-box">
              <span className="footer-header">Faith Baptist Church</span>
              <div className="fbc-text">
                Faith Baptist Church welcomes everyone irrespective of the
                language, culture and religion. We love God. We are a group of
                tamil christians come together to worship Jesus and have
                fellowship. We would like to transform people and their lives by
                teaching them about Jesus.
              </div>
            </div>
            <div className="address-box box">
              <span className="footer-header">Visit Us</span>
              <p className="">Faith Baptist Church</p>
              <p className="">Stæljeæra 11</p>
              <p className="">Oslo, Norway</p>
              <p>Mobile no: 95881223</p>
              <p>Email: anto-b@online.no</p>
              <div className="address-links">
                <a
                  href="https://www.facebook.com/people/Faith-Baptist-Church-Oslo/100064680607767/"
                  target="_blank"
                  className="text-3xl"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/faithbaptistchurchoslo/"
                  target="_blank"
                  className="text-3xl"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/@Tamilbaptistchurch"
                  target="_blank"
                  className="text-3xl"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="links box">
              <span className="footer-header">Menu</span>
              <ul>
                <li>
                  <NavItem1 title="Home" url="/home"></NavItem1>
                </li>
                <li>
                  <NavItem1 title="About us" url="/about"></NavItem1>
                </li>
                <li>
                  <NavItem1 title="Ministries" url="/ministries"></NavItem1>
                </li>
                <li>
                  <NavItem1 title="Gallery" url="/gallery"></NavItem1>
                </li>
                <li>
                  <NavItem1 title="Sermons" url="/sermons"></NavItem1>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright center">
            <p className="">Faith Baptist Church @ 2023. All rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
