import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginStyled } from '../StyledComponents/LoginStyled'
import { ToastContainer, toast } from 'react-toastify'
import Loader from './Loader'


const Login = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email:"", password:""
  })

  const [loading, setLoading] =useState(false)

   const Toastoptions= {
        position:"top-center",
        autoClose: 6000,
        pauseOnHover: true,
        draggable:true,
        theme :"light"

    };

  const onChangeHandler = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  // if(loading === true){
  //   toast.loading("please wait ", Toastoptions)
  // }
  
const login = (e)=>{
e.preventDefault()
setLoading(true)
fetch('https://different-lingerie-goat.cyclic.app/login', {  method:'POST',body:JSON.stringify(credentials), headers:{'Content-Type':'application/json'}}).then((res)=>{
    return res.json()
}).then((token)=>{
  console.log(token)
  if(token.token){
    localStorage.setItem("auth_token", token.token)
    navigate('/user-profile')
  }else{
    // alert(token.error)
    setLoading(false)
    toast.error(token.error, Toastoptions)

  }
}).catch((err)=>{
  console.log(err)
})


}

  return (
  <>
     {loading ? <Loader/> : ""}
   <LoginStyled className="login-box">
   
   <samp> For testing purpose use </samp> <br />
   <samp>usename : "demo@gmail.com"</samp><br />
   <samp>password : "demo".</samp>

   <h2>Login</h2>
   <form onSubmit={login}>
     <div className="user-box">
       <input type="email" name="email" onChange={onChangeHandler} placeholder="Enter your email" value={credentials.email} required=true />
       <label>Username</label>
     </div>
     <div className="user-box">
       <input type="password" name="password" onChange={onChangeHandler} value={credentials.password} required=true />
       <label>Password</label>
     </div>
     <button type='submit' >
       <span></span>
       <span></span>
       <span></span>
       <span></span>
       Login
     </button>
   </form>
   <h6 className='my-2'>don't have accout <Link to="/register">Register</Link></h6>
   <ToastContainer />
 </LoginStyled>
 
  </>
   
  )
}

export default Login
