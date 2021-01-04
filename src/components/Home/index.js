import React, { Component, createRef } from 'react';
import {
   Box,
  Grid,
  List, 
  Paper, 
  Typography
} 
from '@material-ui/core'

import Bots from '../Bots';
import dataBots from '../../data/Bots.js';
import Chat from '../Chat';
import Message from '../Message';

class Home extends Component {

  constructor(props) {
    super(props)
    this.dataBots = { dataBots }
    this.messagesRef = createRef()
    this.state =
    {
      messages: {},
      currentMessageUser: '',
      isMessage: false
    }
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    const isMessage = true

    this.setState({ messages, currentMessageUser: message, isMessage })
    this.verifResponseBot(message)
  }

  verifResponseBot(message) {
    const { dataBots } = this.dataBots

    dataBots.map((item, index) =>
      item.options[message.message] ? setTimeout(() => { this.createMessageBot(item.name, item.options[message.message], item.avatar) }, 2000) : false
    )
    this.setState({ isMessage: false })
  }

  createMessageBot = (name, messagebot, avatar) => {
    const messages = { ...this.state.messages }

    const message = {
      id: String(Math.floor(Math.random() * Math.floor(10000))),
      pseudo: name,
      avatar,
      message: messagebot,
      isUser: false,
      sentAt: Date.now()
    }

    messages[`message-${Date.now()}`] = message
    
    this.setState({ ...this.state.messages, messages })
  }


  componentDidUpdate() {
    setTimeout(() => { 
      const ref = this.messagesRef.current
      ref.scrollTop = ref.scrollHeight 
    }, 300)
  }

  render() {
    const nbmessages = Object.keys(this.state.messages).length
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
          <Message
            isUser={this.state.messages[key].isUser}
            avatar={this.state.messages[key].avatar}
            message={this.state.messages[key].message}
            id={this.state.messages[key].id}
          />
      ))
    const { dataBots } = this.dataBots
    return (
      <div>
        <Box mt={3}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item md={4} >
              <List>
                <Box px={2}>
                  {dataBots.map((item, index) =>
                    <Bots isMessage={this.state.isMessage} message={this.state.message} key={item.id} data={item} />
                  )}
                </Box>
              </List>
            </Grid>

            <Grid item xs={12} md={8} >
              <Paper square >
                <Box p={1} >
                  <Typography variant="h6" gutterBottom>Messages ({nbmessages})</Typography>
                </Box>
                <div className="box">
                  <div className="messages" ref={this.messagesRef}>
                      {messages}
                  </div>
                </div>
              </Paper>
              <Box mt={2}>
                <Chat  addMessage={this.addMessage} longueur={20} pseudo={this.state.pseudo} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default Home;