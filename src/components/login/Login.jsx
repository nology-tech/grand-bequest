import React from 'react'
import "Login.scss";

const Login = () => {
    return (
        <div className="login">
            <input className="login__email" type="text" />
            <input type="password" />
            <button className="login__button">Login</button>
        </div>
    )
}

export default Login
