import { React, useState } from 'react'
import { Button, TextField, Container } from '@mui/material'

const Login = ({onLogin}) => {
    const [username, setUsername] = useState('')
    return (
        <div>
            <Container style={{display: 'flex', margin: '5px', flexDirection: 'column'}}>
            <TextField placeholder='username' onChange={(e) => {
                setUsername(e.target.value);
            }}></TextField>
            <Button
                variant='contained'
                onClick={() => onLogin(username)}>login</Button>
            </Container>
        </div>
    )
}

export default Login
