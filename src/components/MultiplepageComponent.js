import React , { Component } from 'react';

import Login from './LoginComponent';
import Main from './MainComponent';

import {verifyToken} from '../shared/http';
import Loader from './Loader';

class Multiplepage extends Component{

      constructor(props){
            super(props);
            this.state = {
                  isVerified: false,
                  isLoading: true
            };
            this.changestate=this.changestate.bind(this);
            this.changeLoading=this.changeLoading.bind(this);
        
      }

      changestate(value){
            console.log(value);
            this.setState({
                  isVerified: value
            });
      }

      changeLoading(value){
            // console.log(value);
            this.setState({
                  isLoading: value
            });
      }

      async componentDidMount(){
            
            //check validity of token
            await this.setState({isLoading:true})
            if(localStorage.token){
                  var res= await verifyToken()
                  console.log(res,"res")
                  if(res.user) this.setState({isVerified:true})
                  else this.setState({isVerified:false})
            }
            else this.setState({isVerified:false})

            await this.setState({isLoading:false})
      }

      render(){   
            if(this.state.isLoading){
                  return (
                        <Loader/>
                  );
            }        
            else if(!this.state.isVerified){
                  return(      
                        <Login changestate={this.changestate} changeLoading={this.changeLoading}/>
                        // <Loader/>
                  );
            }
            else{
                  return(      
                        <Main/>
                  );
            }            
      }
}

export default Multiplepage;