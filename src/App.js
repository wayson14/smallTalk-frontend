import './App.scss';
import Chat from './Chat.js';

import { useState, useEffect} from 'react'
import { AppBar, Typography, Toolbar, Button, CssBaseline} from '@mui/material'

function App() {

  const [username, setUsername] = useState('');

  return (
    
    <div className="App">
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
      <Chat></Chat>
    </div>
  );
}

export default App;
