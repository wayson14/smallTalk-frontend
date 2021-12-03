import { React, useState } from 'react';
import Button from './Button.js';
import './Login.scss';

const LoginForm = ({ onLogin, onLogout}) => {

    const [username, setUsername] = useState("");
    const [passwd, setPasswd] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onLogin({username, passwd});        
        setUsername("");
        setPasswd("");
    }

    const onReset = (e) => {
        e.preventDefault();
        onLogout();
        setUsername("");
        setPasswd("");
    }

    return (
        <div>
            {/* <Info text="Wrong credentials" color="red"/> */}
            <form className="login-form">
                <div className="from-control">
                    <input className="form-field" name="username" type="text" onChange={e => setUsername(e.target.value)} placeholder="Type your username"/>
                </div>
                <div className="from-control">
                    <input className="form-field" name="passwd" type="password" onChange={e => setPasswd(e.target.value)} placeholder="Type your password"/>
                </div>
                <div className="btn-panel flex">
                    <Button type="submit" onClick={onSubmit} text="Login"/>
                    <Button type="button" onClick={onReset} text="Logout"/>
                </div>

            </form>
        </div>
    )
}

export default LoginForm
