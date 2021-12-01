import { React, useState } from 'react';
import Button from './Button.js';
import './LogIn.scss';

const LoginForm = ({ onLogin }) => {

    const [username, setUsername] = useState("");
    const [passwd, setPasswd] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onLogin({username, passwd});        
        setUsername("");
        setPasswd("");
    }

    return (
        <div>
            {/* <Info text="Wrong credentials" color="red"/> */}
            <form className="login-form" onSubmit={onSubmit}>
                <div className="from-control">
                    <input className="form-field" name="username" type="text" onMouseMove={e => setUsername(e.target.value)} placeholder="Type your username"/>
                </div>
                <div className="from-control">
                    <input className="form-field" name="passwd" type="password" onMouseMove={e => setPasswd(e.target.value)} placeholder="Type your password"/>
                </div>
                <div className="from-control">
                    <Button type="submit" text="Login"/>
                </div>

            </form>
        </div>
    )
}

export default LoginForm
