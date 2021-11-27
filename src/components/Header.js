import { React, useState } from 'react'

const Header = (u) => {
    const [user, setUser] = useState(u);
    return (
        <div className="navbar">
            <h1>Chad-Chat</h1>
            <p>{user.user.username}</p>
            {console.log(user.user.username)}
        </div>
    )
}

export default Header
