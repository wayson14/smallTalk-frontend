import React from 'react'
import './LogIn.scss'

const Button = ({ color, text, onClick}) => {
    return (
        <button
            className="btn"
            onClick={onClick}
        >
            {text}
        </button>
    )
}
Button.defaultProps = {
    color: 'steelblue',
}

export default Button
