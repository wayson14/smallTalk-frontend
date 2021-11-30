import { React, useState } from 'react'

const Header = (u) => {
    const [user, setUser] = useState(u.user);

    const updateUsername = () => {
        setUser({...user, username: 'changed user'});
    }

    return (
        <div className="navbar">
            <h1>Chad-Chat</h1>
            {/* <button onClick={updateUsername}>change username</button> */}
            <p>{user.username}</p> 
            {/* /* //https://www.youtube.com/watch?v=5Xew--ycx0o&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=13  */} 
            {console.log(user.username)}
        </div>
    )
}

export default Header
