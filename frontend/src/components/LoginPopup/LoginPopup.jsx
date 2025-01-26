import React, { useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCureState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandlder = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  }

  useEffect(() => {
    console.log(data);
  }, [data])

  console.log(currState)
  return (
    <div className="login-popup">
      <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
          {currState==="Login" ?  
            <></> : <input name='name' onChange={onChangeHandlder} value={data.name} type="text" placeholder='Your name' /> 
          }
            <input name='email' onChange={onChangeHandlder} value={data.email} type="email" placeholder='Your email' />
            <input name='password' onChange={onChangeHandlder} value={data.password} type="password" placeholder='Your password' />
          </div>
          <button>{currState==="Sign Up" ? "Create Account" : "Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" />
            <p>By continuing, i agree to the terms of use privacy & policy.</p>
          </div>
          {currState==="Login" ? 
          <p>Create new account? <span onClick={() => setCureState('Sign Up')} >Click here</span></p>
          : 
          <p>Already have account? <span onClick={() => setCureState('Login')} >Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup