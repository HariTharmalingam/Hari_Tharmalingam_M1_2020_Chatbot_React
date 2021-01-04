import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

class Bots extends Component {
    constructor(props) {
        super(props)
        const { data, message, isMessage } = this.props
        this.state = data
        this.message = message
        this.isMessage = isMessage
    }

    render() {
        const { name, avatar, description } = this.state
      
        return (
            <>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt={name} src={avatar}  />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <>
                                {description}
                            </>
                        }
                    />
                </ListItem>
                <Divider />
            </>
        )
    }
}

export default Bots
