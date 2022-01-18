import './App.scss';
import Chat from './Chat.js';
import Login from './Login.js';
import { useState, useEffect} from 'react'
import { Container, AppBar, Typography, Toolbar, Button, CssBaseline} from '@mui/material'
// import { makeStyles } from '@mui/styles'
function App() {

  // const useStyles = makeStyles({
  //   root: {
  //     margin: '20px',
  //   }
  // })
  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUsername] = useState('');

  const onLogin = (u) => {
    setLoginStatus(true);
    setUsername(u);
    
  }

  useEffect(() => {
    console.log(username);
  }, [username])
  return (
    
    <div className="App" >
      <CssBaseline/>
      {/* <AppBar position="relative" sx={{
        backgroundColor: 'white',
        color: 'black',
      }}>
        <Toolbar>
          <Button variant="contained" onClick={()=>setUsername('admin')}>Login</Button>
          <Button variant="outlined" onClick={()=>setUsername('')}>Logout</Button>
          <Typography>{username}</Typography>
        </Toolbar>
      </AppBar> */}
      <Container alignItems="center" component="main" maxWidth="xs">
        {loginStatus ? <Chat u={username}></Chat> : <Login onLogin={onLogin}></Login>}
      </Container>
    </div>
  );
}

export default App;
