import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import { TextField } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FaceIcon from '@material-ui/icons/Face'
import Chat from './Chat'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send'

import './CSS/Chat.css'

const useStyles = makeStyles((theme) => ({
      button: {
      margin: theme.spacing(1),
      },
}));

const headers = {
      host: 'localhost:3000',
      connection: 'keep-alive',
      accept: 'application/json, text/plain, */*',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36',
      origin: 'http://localhost:3001',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      referer: 'http://localhost:3001/',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8'
}



function SendButton(props) {
      const classes = useStyles();
      return (
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<SendIcon />}
            onClick={props.handleSend}
          >
            Send
          </Button>
      );
}
  
const socket = socketIOClient('http://localhost:3000/')

class Client extends Component {
      constructor(props) {
            super(props)
            this.textInput = React.createRef();
            this.state = {
                  text: '',
                  allMessages: [],
                  roomId: props.Room,
                  activeUsers: []
            }
            // if(window.performance) {
            //     if(performance.navigation.type == 1) {
            //         socket.emit('leave', {roomId: this.state.roomId})
            //     }
            // }
            this.handleSend = this.handleSend.bind(this)
            this.handleChange = this.handleChange.bind(this)
            this.scrollToBottom = this.scrollToBottom.bind(this)
      }
    
      scrollToBottom = () => {
            this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      
      componentDidUpdate() {
            this.scrollToBottom()
      }
    
      async componentDidMount() {
            socket.on('connect', async () => {
                  socket.emit('join', {
                  roomId: this.state.roomId,
                  username: localStorage.username
                  })
                  const res = await axios.get(`http://localhost:3000/mychat/${this.state.roomId}`, headers)
                  if(!res.data)
                  return
                  console.log(res.data.Messages)
                  this.setState({
                  allMessages: res.data.Messages
                  }, () => {
                  console.log(this.state.allMessages)
                  })
                  this.scrollToBottom()
            })
            socket.on('newMessage', (message) => {
                  const updatedMessages = [...this.state.allMessages, message]
                  this.setState({
                  allMessages: updatedMessages
                  })
            })
            socket.on('updateActive', async () => {
                  console.log('hello chk')
                  const res = await axios.get(`http://localhost:3000/mychat/${this.state.roomId}`, headers)
                  const activeUsersUpdated = res.data.People
                  this.setState({
                  activeUsers: activeUsersUpdated
                  })
            })
      }

      handleChange(event) {
            const {name, value} = event.target
            this.setState({
                  [name]: value
            })
      }

      handleSend(event) {
            if(this.state.text === '')
                  return
            socket.emit('createMessage', { text: this.state.text, roomId: this.state.roomId, from: localStorage.phno }, () => {
                  console.log('callback check')
            })
            this.setState({
                  text: ''
            }, () => {
                  this.textInput.current.focus();
            })
      }

      render() {
            const { allMessages, activeUsers } = this.state
            return (
            <div className="chat-page">
                  <div className="sidebar">
                        <div className="sidebar-text">Active</div>
                        <div className="sidebar-icon">
                              <PeopleAltIcon 
                              fontSize="large"
                              />
                        </div>
                        <div className="active-users">
                              {activeUsers.map((user) => <div><Chip avatar={<Avatar>{user.username[0]}</Avatar>} label={<div className="active-name">{user.username}</div>} /></div>)}
                        </div>
                        <div className="sidebar-image">
                              <img className="actual-image" src="https://cdn3.iconfinder.com/data/icons/vector-robots-set-concept-in-blue-color-style/1772/robot_questions_answers_issues_problem_solving_consultant_consultation-512.png" />
                        </div>
                  </div>
                  <div className="contain">
                        <div className="display-section">
                              {allMessages.map((msg) => <Chat message={msg}/>)}
                              <div style={{ float:"left", clear: "both" }}
                              ref={(el) => { this.messagesEnd = el; }}>
                              </div>
                        </div>
                        <div className="send-section">
                              <div className="form-contain">
                              <div className="form-input">
                                    <TextField 
                                          value={this.state.text}
                                          name="text"
                                          label="Message"
                                          variant="outlined"
                                          required={true}
                                          onChange={this.handleChange}
                                          placeholder="Type here"
                                          autoFocus={true}
                                          fullWidth={true}
                                          inputRef={this.textInput}
                                          onKeyPress={(event) => {
                                          if (event.charCode === 13) {
                                                this.handleSend()
                                          }
                                          }
                                          }
                                    />
                              </div>
                              <div className="form-send">
                                    <SendButton 
                                          handleSend={this.handleSend}
                                    />
                              </div>
                              </div>
                        </div>
                  </div>
            </div>
            )
      }
}

export default Client