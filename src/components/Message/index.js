import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            message: '',
            avatar: null
        }
    }

    componentDidMount() {
        const { id, avatar, message } = this.props
        this.setState({ id, avatar, message })
    }

    render() {
        return (
            <>
                {this.state.message !== '' &&
                    <>           
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar src={this.requireImage(this.state.avatar)} />
                            </ListItemAvatar>
                            <Box color="primary.main">
                                <ListItemText primary='Vous' secondary={this.state.message} />
                            </Box>
                        </ListItem>
                    </>
                }
            </>
        )
    }
}

export default Message