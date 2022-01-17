import { Button, TextField, Paper, CardHeader, Container, Avatar, Card, Typography, Grid} from '@mui/material';
import { React, useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';


const Chat = () => {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('default');
    const [messagesArray, setMessagesArray] = useState([]);


    let room = 1;
    let renderChat = 1;

    const url = `ws://127.0.0.1:8000/ws/chat/${room}/`
    const client = new W3CWebSocket(url);

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected')
        }

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            setMessagesArray(messagesArray => [...messagesArray, dataFromServer])

        }
    }, [])

    useEffect(() => {
        console.log(messagesArray);
    },[messagesArray])

    return (
        <Container component="main" maxWidth="xs">

            

            
            <Paper style={{ height: 300, maxHeight: 300, overflow: 'auto', boxShadow: 'none', }}>
              {messagesArray.map(message => <>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar>
                        R
                  </Avatar>
                    }
                    title={message.username}
                    subheader={message.message}
                  />
                </Card>
              </>)}
            
            </Paper>
            <Container sx={{display: 'flex'}} >
                <TextField 
                    size="small"
                    id="outlined-basic"
                    onChange={(e)=>setMessage(e.target.value)}/>
                <Button variant="contained" size="medium" onClick={(e)=>{
                    client.send(JSON.stringify({
                        type: "message",
                        message: message,
                        username: name
                    }));
                    e.preventDefault();
                }}>send message</Button>
            </Container>
        </Container>
    )
}

export default Chat
