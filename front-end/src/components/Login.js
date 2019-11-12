import React, {useState} from 'react'
import axios from 'axios'
import {Route, NavLink} from 'react-router-dom'


function Login(props){
     const [credentials, setCredentials] = useState({
          username:"kevin",
          password:"kevin"
     })

     const handleChange = event => {
          setCredentials({
               ...credentials, 
               [event.target.name]:event.target.value
          })
     }

     const handleSubmit = event => {
          event.preventDefault();

          axios.post("http://localhost:4500/api/auth/login", credentials)
          .then(response => {
               console.log(response)
               props.history.push('/')
          })

     }

     return(
          <div>
         

               <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange} />
                    
                    <input 
                    type="text"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange} />
                    
                    <button>Submit</button>
               </form>
          </div>
     )
}

export default Login