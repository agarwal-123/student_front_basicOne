import React , { Component, useState } from 'react';
import { Switch, Route, Redirect, NavLink, Link} from 'react-router-dom';
import './Main.css'
import {SUBJECTS,PHYSICS} from '../shared/subjects';
import Chapter from './ChapterComponent';
import Videoplayer from './VideoplayerComponent';

function Navbar(){
      return (
            <div>
                  <div className="header clearfix">
                        <h1 className="header-primary"><span>Quick</span>study</h1>
                        <h1 className="header-secondary">Learn Smart</h1>
                  </div>
            </div>
      );
}

function Sidebar(){
      return (
            <div className="sidebar">
                  <NavLink className="nav-link"  to='/subject'>S</NavLink>
                  <NavLink className="nav-link"  to='/test'>T</NavLink>
                  <NavLink className="nav-link"  to='/subject'>P</NavLink>
                  <NavLink className="nav-link"  to='/subject'>B</NavLink>
            </div>
      );
}

function Subject(){

      const subjects=SUBJECTS.map((subject)=>{
            return(
                  <Link className="link" to={`/subject/${subject.name}`}>
                        <div className="subject col3" id={subject.id} key={subject.id}>
                              <h3>{subject.name}</h3>
                        </div>
                  </Link>
            );
      });
     
      const physics=PHYSICS.map((chapter)=>{
            if(chapter.name.length>25)
                  chapter.name=chapter.name.substring(0,22)+"...";
            return(
                  <div className="chapter col4">
                        <img src="./assets/book3.jpg"></img>
                        <h3>{chapter.name}</h3> 
                        <div className="newrow clearfix">
                              <h4>{chapter.learn}%{" "}Learnt</h4>
                              <h4>{chapter.practice}%{" "}Practiced</h4>
                        </div>
                  </div>
            );
      });

      var left=5;

      const slideleft=()=>{       
            if(left>-340){
                  left-=50;
                  var tmp=left+'%';
                  document.getElementsByClassName('chapters')[0].style.marginLeft=tmp;
            }  
      };

      const slideright=()=>{    
            if(left<5){
                  left+=50;
                  let tmp=left+'%';
                  document.getElementsByClassName('chapters')[0].style.marginLeft=tmp;
            }       
      };
      

      return(
            <div className="comp">       
                  <img className="header-img" src="./assets/book11.jpg"></img>
                  <h1>Explore by subjects</h1>
                  <div className="row1 clearfix">
                        {/* <div className="all-subject"> */}
                              {subjects}
                        {/* </div> */}
                  </div>
                  <div className="row2">
                        <div className="chapters clearfix">
                              {physics}
                        </div>
                        <button className="first-button"  onClick={slideleft}><img src="./assets/garrow1.png"></img></button> 
                        <button className="second-button" onClick={slideright}><img src="./assets/garrow.png"></img></button>
                  </div>
                 
            </div>
      );
}



function Test(){
      return(
            <div className="comp">
                  <div className="test">
                        <h1>Test</h1>
                  </div>
            </div>
      );
}

class Main extends Component{

      
      render(){

            const selectchapter=({match})=>{
                  console.log("hello 1");
                  return(
                        <Chapter subname={match.params.subname}/>
                  );
            }

            const selecttopic=({match})=>{
                  console.log(match.params.topic,match.params.chapter);
                  return (
                        <Videoplayer topic={match.params.topic} chapter={match.params.chapter}/>
                  );
            }

            return(
                  <div className="main">
                        <Navbar/>
                        <div className="container clearfix">
                              <Sidebar/>
                              <div className="side-container">
                                    <Switch>
                                          <Route exact path='/subject' component={()=><Subject/>} />
                                          <Route path='/subject/:subname' component={selectchapter} />
                                          <Route path='/chapter/:chapter/:topic' component={selecttopic} />
                                          <Route path='/test' component={()=><Test/>}/>
                                          <Redirect to="/subject"/>
                                    </Switch>
                              </div> 
                        </div>   
                       
                  </div>
            );
      }
}
export default Main;