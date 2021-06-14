import React from 'react'
import "Login.scss";

const Login = () => {
    return (
        <div class="login">
            <input class="login__email" type="text" />
            <input type="password" />
            <button class="login__button">Login</button>
        </div>
    )
}

export default Login
