import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCureState] = useState("Login")
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const {url, setToken} = useContext(StoreContext);

  const onChangeHandlder = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if(currState === "Login") 
    {
      newUrl += '/api/user/login';
    } else {
      newUrl +=  '/api/user/register';
    }

    try {
      const response = await axios.post(newUrl, data);
      console.log(response);

      if(response.data.success)
      {
        setToken(response.data.token);
        localStorage.setItem('Token', response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message)
      }

      // console.log('Succes');
    } catch (error) {
      console.log(`Error : ${error}`);
    }

  }

  console.log(currState)
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
          {currState==="Login" ?  
            <></> : <input name='name' onChange={onChangeHandlder} value={data.name} type="text" placeholder='Your name' required/> 
          }
            <input name='email' onChange={onChangeHandlder} value={data.email} type="email" placeholder='Your email' required/>
            <input name='password' onChange={onChangeHandlder} value={data.password} type="password" placeholder='Your password' required/>
          </div>
          <button type='submit' >{currState==="Sign Up" ? "Create Account" : "Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" required/>
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