import { IconButton, Button, TextField, Paper, CardHeader, Container, Avatar, Card, Typography, Grid, withStyles} from '@mui/material';
import { React, useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import {getUsername} from './services.js';
// import { SendIcon } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
const Chat = ({u}) => {

  const [message, setMessage] = useState('');
  const [username, setUsername] = useState(u);
  const [messagesArray, setMessagesArray] = useState([]);
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [room, setRoom] = useState(1);

  let renderChat = 1;

  const url = `ws://127.0.0.1:8000/ws/chat/${room}/`
  const client = new W3CWebSocket(url);

  
  // const useStyles = theme => ({
  //   paper: {
  //     marginTop: theme.spacing(8),
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main,
  //   }
  // })
  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
      setConnectionStatus(true);
    }

    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      setMessagesArray(messagesArray => [...messagesArray, dataFromServer]);
    }

    client.onclose = () => {
      console.log('WebSocket Client Disconnected');
      setConnectionStatus(false);
    }

    // w przyszłości
    // setUsername(getUsername())

  }, [])

  useEffect(() => {
    console.log(messagesArray);
  }, [messagesArray])

  const sendMessage = () => {
    
  }
  return (
    <>
      <Paper maxWidth="xs" style={{ height: 300, maxHeight: 300, overflow: 'auto', boxShadow: 'none', backgroundColor: connectionStatus ? '#56e393' : '#e35656'}}>
        {messagesArray.map(message => <>
          <Card>
            <CardHeader
              avatar={
                <Avatar>
                  R
                </Avatar>
              }
              title={message?.username}
              subheader={message?.message}
            />
          </Card>
        </>)}
      </Paper>
      
      <Grid container >
      <TextField
        style={{maxWidth:'100%'}}
        type="text"
        label="message"
        onChange={(e) => setMessage(e.target.value)} />
      <IconButton 
        variant="contained"
        onClick={(e) => {
        client.send(JSON.stringify({
          type: "message",
          message: message,
          username: username
        }));
        e.preventDefault();
      }}><SendIcon></SendIcon></IconButton>
      </Grid>
    </>

  )
}

export default Chat
