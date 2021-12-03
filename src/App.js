import './index.scss';
import User from './services/User.js'
import { useState } from 'react';
import Login from './components/Login.js'
const App = () => {
  const [user, setUser] = useState(new User());
  const [renders, setRenders] = useState({header: 1, form: 1});
  console.log(renders)
  const onLogin = (credentials) => {
    user.login(credentials)
      .then((result) => {
        if(result){
          console.log(`Witaj ${user.username}`);
          setRenders(()=>({...renders, header: renders.header*-1, form: renders.header*-1}));
         }
         else console.log("Podano złe dane!");
      })
  }

  const onLogout = () => {
    user.logout();
    console.log("Wylogowano");
    setRenders(()=>({...renders, header: renders.header*-1, form: renders.header*-1}));
  }
  


  return (
      <div className="app">
        <Login 
          givenUser={user}
          givenRenders={renders} 
          onLogin={onLogin}
          onLogout={onLogout}/>
      </div>
  );
}

export default App;
