import React , { Component } from 'react';
import { Switch, Route, Redirect, NavLink, Link, useHistory} from 'react-router-dom';

import Login from './LoginComponent';
import Main from './MainComponent';
import HomeComponent from './HomeComponent';

import {verifyToken} from '../shared/http';


class Multiplepage extends Component{

      constructor(props){
            super(props);
            this.state = {
                  isVerified: false
            };
            this.changestate=this.changestate.bind(this);
        
      }

      changestate(value){
            console.log(value);
            this.setState({
                  isVerified: value
            });
      }

      async componentDidMount(){
            
            //check validity of token
           
            if(localStorage.token){
                  var res= await verifyToken()
                  console.log(res,"res")
                  if(res.user) this.setState({isVerified:true})
                  else this.setState({isVerified:false})
            }
            else this.setState({isVerified:false})
      }

      render(){           
            if(!this.state.isVerified){
                  return(  
                        <Switch>
                              <Route path='/home' component={()=><HomeComponent/>} />
                              <Route path='/enter' component={()=><Login changestate = {this.changestate}/>} />
                              <Redirect to="/home"/>
                        </Switch>                          
                  );
            }
            else{
                  return(      
                        <Main changestate = {this.changestate}/>
                  );
            }            
      }
}

export default Multiplepage;