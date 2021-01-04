import React, { Component } from 'react';
import { 
  Box, 
  InputBase, 
  Toolbar,
  Button,
  Paper
} 
from '@material-ui/core';

class Chat extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: '',
            longueur: this.props.longueur
        }
    }

    createMessage = () => {
        const { addMessage, longueur} = this.props

        if(this.state.message !== '/help'){
          const message = {
            id: Math.floor(Math.random() * Math.floor(10000)),
            isUser: true,
            message: this.state.message,
          }
          
          addMessage(message)
        }else{
          this.createMessageHelp()
        }

      }

      createMessageHelp(){
        const { addMessage} = this.props

        const message = {
          id: Math.floor(Math.random() * Math.floor(10000)),
          pseudo: 'Robot Assistant',
          avatar: 'robot.jpg',
          message: 'Les commandes disponibles sont /help, ultime et role',
        }
        
        addMessage(message)
      }
      
      handleKeyUp = event => {
        if (event.key === 'Enter') {
          this.createMessage()
        }
      }

      strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}
      handleChange = event => {
        
        let message = this.strUcFirst(event.target.value)
        const longueur = this.props.longueur - message.length
        this.setState({ message, longueur })
        
      }
    
      handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
      }

    render() {
        return (
                <Toolbar position="relative" >
                    <Box width="100%">
                        <Paper onSubmit={this.handleSubmit} component="form" >
                            <Box p="5px" display="flex" >
                                <InputBase
                                    fullWidth={true}
                                    onKeyUp={this.handleKeyUp}
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    placeholder='Tape "/help" pour voir les commandes'
                                />
                                <Button variant="contained" type="submit" aria-label="search">Envoyer</Button>
                            </Box>
                        </Paper>
                    </Box>
                </Toolbar>
        )
    }
}

export default Chat
