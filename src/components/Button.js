import React from 'react'
import './Login.scss'



const Button = ({ color, text, onClick, props}) => {
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
