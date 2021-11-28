import { React, useState } from 'react'

const Header = (u) => {
    const [user, setUser] = useState(u);
    return (
        <div className="navbar">
            <h1>Chad-Chat</h1>
            <p>{user.user.username}</p> //https://www.youtube.com/watch?v=5Xew--ycx0o&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=13 
            {console.log(user.user.username)}
        </div>
    )
}

export default Header
