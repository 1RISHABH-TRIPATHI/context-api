/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Home() {
    const {user}=useContext(UserContext);
    if(!user)
    return <> <h4>Please Login </h4></>
    return <div>
        {user.userName}  
    </div>
}

export default Home
