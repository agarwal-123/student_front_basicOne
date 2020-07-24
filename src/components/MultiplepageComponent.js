import React , { Component } from 'react';
import Login from './LoginComponent';
import Main from './MainComponent';

class Multiplepage extends Component{

      constructor(props){
            super(props);
            this.state = {
                  isVerified: true
            };
            this.changestate=this.changestate.bind(this);
        
      }

      changestate(){
            console.log(this.state.isVerified);
            this.setState({
                  isVerified: !this.state.isVerified
            });
      }

      render(){           
            if(!this.state.isVerified){
                  return(      
                        <Login changestate={this.changestate}/>
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