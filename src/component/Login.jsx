/* eslint-disable no-unused-vars */
import React ,{useState,useContext,} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [userName,setUserNmae]=useState('');
    const [password,SetPassword]=useState('');
    const {setUser} =useContext(UserContext)
  return (
    <div>
        <h2>
            Login

        </h2>
        <input type="text" placeholder='Enter tada'
         value={userName}
         onChange={(e)=>setUserNmae(e.target.value)}
        />
        <input type="password" name="" id="" onChange={(e)=>SetPassword(e.target.value)}  />  <br />
        <button onClick={(e)=>{
            e.preventDefault();
            setUser({userName,password});
        }} > Submit</button>
    </div>
  )
}

export default Login
