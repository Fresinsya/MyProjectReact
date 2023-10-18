import React from 'react'
import { useState } from 'react'

function Login () {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const login = (event) =>{
        event.preventDefault()
        console.log(username)
    }

  return (
    <div>
        <h2>login</h2>
        <form>
            <input 
            type="text" 
            name='username' 
            placeholder="username" 
            value={username}
            onChange={handleUsername}
            />
            <input 
            type="password" 
            name='password' 
            placeholder="password" 
            value={password}
            onChange={handlePassword}
            />
            <button onClick={login}>Login</button>
        </form>
    </div>
  )
}

export default Login