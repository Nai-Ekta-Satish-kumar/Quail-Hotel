import React,{useState} from 'react'
import axios from "axios";
function Loginscreen() {
   
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')
   

async function login(){

    const user={
        email,
        password
    }
    try {
      const result = await axios.post('/api/users/login',user).data 
  } catch (error) {
      console.log(error)
  }
  console.log(user)
}
    return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5">
        <div>
            <h2>login</h2>
              <input type="email" className="form-control" placeholder="Email"
             value= {email} onChange= {(e)=>{setEmail(e.target.value)}}/>
              <input type="password" className="form-control" placeholder="Password"
             value= {password} onChange= {(e)=>{setPassword(e.target.value)}}/>
             <button className='btn btn-primary'  onClick={login}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Loginscreen