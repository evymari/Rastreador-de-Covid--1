import React from 'react';
import HomeImages from '../../utils/images/imagesHome';
import './footerHome.css'; 

const Footer = () => {
  return (
    <footer className ="footer">
          <div className ="footer-section logo-section">
                      <img className="footer-logo"
                        src={HomeImages.logo}
                        alt="Logo" 
                      />
                      <p className="description">
                              These droplets can land on objects 
                              and surfaces around the person such as tables,
                              doorknobs and handrails.
                      </p>
                <div className="social-icons">
                          <a href="https://www.facebook.com?" className="social-icon">
                              <i className="fab fa-facebook-f"/>
                          </a>
                          <a href="https://x.com/?lang=es" className="social-icon">
                              <i className="fab fa-twitter"/>
                          </a>
                          <a href="https://www.linkedin.com/" className="social-icon">
                              <i className="fab fa-linkedin-in"/>
                          </a>
                          <a href="https://www.youtube.com/results?search_query=CoviMap" 
                              className="social-icon">
                              <img className='youtube'
                              src={HomeImages.youtube}
                              alt="youtube"/>
                          </a>
                </div>
          </div>
          <div className="footer-section quick-links">
                    <h4>Quic Links</h4>
                        <ul>
                          <li>
                            <a href="https://covimap.dexignzone.com/xhtml/prevention.html">Prevention</a>
                          </li>
                          <li>
                            <a href="https://covimap.dexignzone.com/xhtml/qurantine.html">Quarantine</a>
                          </li>
                          <li>
                            <a href="https://covimap.dexignzone.com/xhtml/about.html">About</a> 
                          </li>
                          <li>
                            <a href="https://covimap.dexignzone.com/xhtml/help.html">Help</a>
                          </li>
                        </ul>
          </div>
          <div className="footer-section about">
                    <h4>About</h4>
                        <ul>
                          <li>
                            <a href="https://covimap.dexignzone.com/xhtml/hand-wash.html">Hand Wash</a>
                          </li>
                          <li>
                            <a href="https://covimap.dexignzone.com/xhtml/social-distance.html">Social Distance</a>
                          </li>
                          <li>
                            <a href="#">Isolate</a>
                          </li>
                          <li>
                            <a href="#">Difference</a>
                          </li>
                        </ul>
          </div>
          <div className="footer-section about">
                    <h4>About</h4>
                        <ul>
                          <li>
                            <a href="https://covimap.dexignzone.com/xhtml/hand-wash.html">Hand Wash</a>
                          </li>
                          <li>
                            <a href="https://covimap.dexignzone.com/xhtml/social-distance.html">Social Distance</a>
                          </li>
                          <li>
                            <a href="#">Isolate</a>
                          </li>
                          <li>
                            <a href="#">Difference</a>
                          </li>
                        </ul>
          </div>
          <div className="footer-section help">
                    <h4>Help</h4>
                        <ul>
                          <li>
                            <a href="https://covimap.dexignzone.com/xhtml/hand-wash.html">Hand Wash</a>
                          </li>
                          <li>
                            <a href="https://covimap.dexignzone.com/xhtml/social-distance.html">Social Distance</a>
                          </li>
                          <li>
                            <a href="#">Isolate</a>
                          </li>
                          <li>
                            <a href="#">Difference</a>
                          </li>
                        </ul>
          </div>
          <div className="footer-bottom">
                    <p className='footer-botton-copy'>
                      &copy; Copyright 2020. All Rights Reserved
                    </p>
                    <p className='footer-bottom-desing'>
                      Design by <a href="https:/dexignzone.com">DexignZone</a>
                    </p>
          </div>
    </footer>
  );
};


export default Footer;

