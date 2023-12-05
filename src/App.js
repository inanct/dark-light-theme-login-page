import React, { useState } from 'react'
import "./index.css"



const App = () => {
  const [theme, setTheme] = useState("light")
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
  }
  return (
    <div className='app' data-theme={theme}>

    <div className="login">
      <h1>Login</h1>
      <div className="container">
        <div className="top">
          <i className='fab fa-google'></i>
          <i className='fab fa-facebook-square'></i>
          <i className='fab fa-linkedin'></i>
          <i className='fab fa-twitter-square'></i>
          <i className='fab fa-apple'></i>
        </div>
        <p className='divider'> <span className='line'>Or</span> </p>
        <form>
          <label>E-mail</label>
          <input type="email" placeholder='Enter your email' />
          <label>Password</label>
          <input type="password" placeholder='Enter your password'/>
          <div className='remember'>
            <input type="checkbox" checked="checked"/>
            <p>Remember Me</p>
          </div>
          <button>Login</button>
        </form>
        <div className='bottom'>
          <p>Forget your password</p>
          <a className='reset' href="/">Reset Password</a>
        </div>
        <p className='create'>Create Account</p>
      </div>
      <div className='theme-toggle'>
        {theme==="light" ? <h2>Dark Theme</h2> : <h2>Light Theme</h2> }
        
        <i onClick={switchTheme} className='fas fa-toggle-on'></i>
      </div>
    </div>
    </div>
  )
}

export default App