import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import "./CSS/Home.css";

export default function HomeComponent(props) {
      return (
            <div className="h-outer-wrapper">
                  <div className="h-upper-modal">
                  <div className="h-heading-wrapper">
                        <div className="h-text-container">The Basic One</div>
                        <div className="h-logo">
                              <img src="./assets/ico.jpeg"></img>
                        </div>
                  </div>

                  <div className="h-button-group">
                        <div className="h-button1 h-button">
                              <button onClick={()=>{props.changeHome(false);}} className="h-btn h-header__btn">
                              Register / Login
                              </button>
                        </div>
                        <div className="h-button2 h-button">
                              <button onClick={()=>{props.changestate(true);localStorage.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYyMGY5MmIxNDdkYjAwMjQ0MzMzM2MiLCJpYXQiOjE2MDAyNjIwMzR9.c-ff-D5UurJeOke1hql5Yrx9azMJ9sHi9fwOdyekXeU";props.changeHome(false);}} className="h-btn h-header__btn">
                              Login as Guest
                              </button>
                        </div>
                  </div>
                  </div>

                  <div className="h-lower-modal">

                  <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Developers
                    </h2>
                  </div>

                  <div className="h-row">
                  <div className="h-story">
                        <figure className="h-story__shape">
                              <img
                                    src="./assets/avt2.png"
                                    alt="Person on a tour"
                                    className="h-story__img"
                              />
                              <figcaption className="h-story__caption">
                                   Dhruva Agarwal
                              </figcaption>
                        </figure>
                        <div className="h-story__text">
                              <h3 className="h-heading-tertiary h-u-margin-bottom-small">
                              I am debugging like a detective in a crime movie where i am also the murderer :P   </h3>
                              <div className="clearfix personal-info">
                              <img src='./assets/linkedin.svg' className="linkedin"/>
                              <div className="linkedin-text"> <a href="https://www.linkedin.com/in/dhruva-agarwal-bb78a8137/" target="_blank">Dhruva Agarwal</a></div> 

                              <img src='./assets/github-logo.svg' className="linkedin"/>
                              <div className="linkedin-text"> <a href="github.com/agarwal-123/" target="_blank">Dhruva Agarwal</a></div> 
                              </div>
                              <br/>
                              <div>
                              <p>
                              <ul>
                                    <li>About 1 year experience of Javascript Frameworks, like React and Nodejs.</li>
                                    <li>Love to solve complex algorithmic problems. Codechef profile: <a>dhruv331</a></li>
                                    <li>Curruntly exploring React-Native for a better understanding of mobile applications.</li>
                              </ul>
                              </p>
                              </div>
                        </div>
                  </div>
                  </div>

                  <div className="h-row">
                  <div className="h-story">
                        <figure className="h-story__shape">
                              <img
                                    src="./assets/avt2.png"
                                    alt="Person on a tour"
                                    className="h-story__img"
                              />
                              <figcaption className="h-story__caption">
                                    Raushan Kumar
                              </figcaption>
                        </figure>
                        <div className="h-story__text">
                              <h3 className="h-heading-tertiary h-u-margin-bottom-small">
                              I love building and automating useless things because everything is useless until someone use them :)
                              </h3>
                              <div className="clearfix personal-info">
                              <img src='./assets/linkedin.svg' className="linkedin"/>
                              <div className="linkedin-text"> <a href="https://www.linkedin.com/in/raushan-kumar-197882179/" target="_blank">Raushan Kumar</a></div> 

                              <img src='./assets/github-logo.svg' className="linkedin"/>
                              <div className="linkedin-text"> <a href="https://github.com/raushan303" target="_blank">Raushan Kumar</a></div> 
                              </div>
                              <br/>
                              <div>
                              <p>
                              <ul>
                                    <li>As a Web Developer with over 1 year experience of Javascript Frameworks, like React and Nodejs.</li>
                                    <li>I am also in love with competitive coding.  <img src='./assets/codechef.svg' className="chef"/> <a href="https://www.codechef.com/users/raushan303">raushan303</a><img src='./assets/codeforces.svg' className="forces"/> <a href="https://codeforces.com/profile/raushan303">raushan303</a> <img src='./assets/leetcode.svg' className="code"/> <a href="https://leetcode.com/raushan303/">raushan303</a></li>
                                    <li>Curruntly exploring React-Native and Flutter for a better understanding of mobile applications.</li>
                              </ul>
                              </p>
                              </div>
                        </div>
                  </div>
                  </div>

                  <div className="h-row">
                  <div className="h-story">
                        <figure className="h-story__shape">
                              <img
                                    src="./assets/avt2.png"
                                    alt="Person on a tour"
                                    className="h-story__img"
                              />
                              <figcaption className="h-story__caption">
                                    Mary Smith
                              </figcaption>
                        </figure>
                        <div className="h-story__text">
                              <h3 className="h-heading-tertiary h-u-margin-bottom-small">
                              Dig deeper,then go ahead and fix it.   </h3>
                              <div className="clearfix personal-info">
                              <img src='./assets/linkedin.svg' className="linkedin"/>
                              <div className="linkedin-text"> <a href="https://www.linkedin.com" target="_blank">Dhruva Agarwal</a></div> 

                              <img src='./assets/github-logo.svg' className="linkedin"/>
                              <div className="linkedin-text"> <a href="https://www.linkedin.com" target="_blank">Dhruva Agarwal</a></div> 
                              </div>
                              <br/>
                              <div>
                              <p>
                              <ul>
                                    <li>About 1 year experience of Javascript Frameworks, like React and Nodejs.</li>
                                    <li>Love to solve complex algorithmic problems. Codechef profile: <a>dhruv331</a></li>
                                    <li>Curruntly exploring React-Native for a better understanding of mobile applications.</li>
                              </ul>
                              </p>
                              </div>
                        </div>
                  </div>
                  </div>

                  <div className="h-row">
                  <div className="h-story">
                        <figure className="h-story__shape">
                              <img
                                    src="./assets/avt2.png"
                                    alt="Person on a tour"
                                    className="h-story__img"
                              />
                              <figcaption className="h-story__caption">
                                    Mary Smith
                              </figcaption>
                        </figure>
                        <div className="h-story__text">
                              <h3 className="h-heading-tertiary h-u-margin-bottom-small">
                              In order to understand recursion, one must first understand recursion. </h3>
                              <div className="clearfix personal-info">
                              <img src='./assets/linkedin.svg' className="linkedin"/>
                              <div className="linkedin-text"> <a href="https://www.linkedin.com" target="_blank">Dhruva Agarwal</a></div> 

                              <img src='./assets/github-logo.svg' className="linkedin"/>
                              <div className="linkedin-text"> <a href="https://www.linkedin.com" target="_blank">Dhruva Agarwal</a></div> 
                              </div>
                              <br/>
                              <div>
                              <p>
                              <ul>
                                    <li>About 1 year experience of Javascript Frameworks, like React and Nodejs.</li>
                                    <li>Love to solve complex algorithmic problems. Codechef profile: <a>dhruv331</a></li>
                                    <li>Curruntly exploring React-Native for a better understanding of mobile applications.</li>
                              </ul>
                              </p>
                              </div>
                        </div>
                  </div>
                  </div>


                  </div>
                  
            </div>
      );
}