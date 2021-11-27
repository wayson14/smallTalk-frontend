import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header.js';
import LoginForm from './components/LoginForm.js'
import User from './services/User.js'
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(new User());

  const onLogin = (credentials) => {
    user.login(credentials)
      .then((result) => {
        result ? console.log(`Witaj ${user.username}`) : console.log("Podano złe dane!")
      })
    return;
  }
  return (
    <Router>
      <div className="App">
        <Header user={user}/>
          <Routes>
            <Route
              path="/" 
              element={<LoginForm onLogin={onLogin}/>}
            />
          </Routes>
      </div>
      
    </Router>
  );
}

export default App;
