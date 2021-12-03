import {useState, React} from 'react'
import LoginForm from './LoginForm'
import Header from './Header'

const Login = ({givenUser, givenRenders, onLogin, onLogout}) => {
    console.log(givenRenders)
    const [user, setUser] = useState(givenUser);
    const [headerRender, setHeaderRender] = useState(givenRenders.header);
    const [formRender, setFormRender] = useState(givenRenders.form);
  
    return (
        <div>
            {headerRender !== 0 && <Header user={user}/>}
            {formRender !== 0 && <LoginForm onLogin={onLogin} onLogout={onLogout}/>}
        </div>
    )
}

export default Login
