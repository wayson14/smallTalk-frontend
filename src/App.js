import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header.js';
import LoginForm from './components/LoginForm.js'
import User from './services/User.js'
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(new User());
  const [headerRender, setHeaderRender] = useState(1);
  

  const onLogin = (credentials) => {
    user.login(credentials)
      .then((result) => {
        if(result){
          console.log(`Witaj ${user.username}`);
          setHeaderRender(headerRender*-1);
         }
         else console.log("Podano złe dane!");
      })
  }
  return (
    <Router>
      <div className="App">
        {headerRender !== 0 && <Header user={user}/>}
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
