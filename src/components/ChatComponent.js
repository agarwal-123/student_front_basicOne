import React, {Component} from 'react';
import ChatMsg from '@mui-treasury/components/chatMsg/ChatMsg';

import './Chat.css';

var messages=
[     
      {message:'Hi Jenny, How r u today?',side:"right"},
      {message:'Did you train yesterday',side:"left"},
      {message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',side:"right"},
      {message:'Hi Jenny, How r u today?',side:"right"},
      {message:'Did you train yesterday',side:"left"},
];

var cards=[];

class Chat extends Component{

      constructor(props){
            super(props);
            this.state = {
              messages:messages,
              cards:[]
            };
            this.addChat = this.addChat.bind(this);
            this.addFile = this.addFile.bind(this);
      }

      componentWillMount(){
            cards = this.state.messages.map((user, i) => {
                  return (
                        <ChatMsg avatar={''} messages={[user.message]} side={user.side}/>
                  );
            });
            this.setState({cards: cards});
            var scrollingElement = (document.scrollingElement || document.body);
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
      }

      addChat()
      {
            var m=document.getElementsByTagName("input")[0].value;
            document.getElementsByTagName("input")[0].value="";
            if(!m.length) 
                  return 1;
            messages.push({message:m,side:'right'})
            this.setState({ messages: messages });
            cards = this.state.messages.map((user, i) => {
                  return (
                        <ChatMsg avatar={''} messages={[user.message]} side={user.side}/>
                  );
            });
            this.setState({cards: cards});
            var scrollingElement = (document.scrollingElement || document.body);
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
            console.log(m,this.state.messages);
      }
        
        
      addFile(e) {

            e.preventDefault();
            var m=document.getElementsByTagName("input")[1].files[0];
            var myHeaders = new Headers();
            myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjAxZjJkM2E3NTM4YzJkN2FlNDQ0ZWMiLCJpYXQiOjE1OTQwNjAwNjV9.9-D9sxfYjvrxzibd-_rfZ-XAVrrZF2IWNg8bnhVl5eg");
            var formdata = new FormData();
            formdata.append("subject", "Maths");
            formdata.append("testFile", document.getElementsByTagName("input")[1].files[0],document.getElementsByTagName("input")[1].value);
            
            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: formdata,
                  redirect: 'follow'
            };
            
            fetch("https://education4all.herokuapp.com/addChat", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            
            messages.push({message:"File Sent Successfully !!",side:'right'})
            this.setState({ messages: messages });
            cards = this.state.messages.map((user, i) => {
                  return (
                  <ChatMsg avatar={''} messages={[user.message]} side={user.side}/>
                  );
            });
            this.setState({cards: cards});
            console.log(m,messages);
      }

      render(){
            return(
                  <div className="chat-container">
                  <div>{this.state.cards}</div>
                  <input style={{'display': 'inline-block'}}/>
                  <button type="submit" onClick={this.addChat} value="Send" style={{  'border': 'none',  'color': 'white',  'padding': '15px 32px',  'text-align': 'center',  'text-decoration': 'none',  'display': 'inline-block',  'font-size': '16px',  'margin': '4px 2px',  'cursor': 'pointer','background-color': '#4CAF50','width':'30%','text-align':'center','margin-bottom':'50px'}}>Send</button>                  
                  <input type="file" id="myFile" name="filename"/>
                  <button onClick={this.addFile} style={{  'border': 'none',  'color': 'white',  'padding': '15px 32px',  'text-align': 'center',  'text-decoration': 'none',  'display': 'inline-block',  'font-size': '16px',  'margin': '4px 2px',  'cursor': 'pointer','background-color': '#4CAF50','width':'30%','text-align':'center','margin-bottom':'50px'}}>Send File</button>
                  </div>
            );
      }

}

export default Chat;