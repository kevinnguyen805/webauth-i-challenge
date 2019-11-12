import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Register(props){

     const [newUser, setNewUser] = useState({
          username:"",
          password:""
     })

      const handleChange = event => {
        setNewUser({
          ...newUser,
          [event.target.name]: event.target.value
        });
      };

      const handleSubmit = event => {
        event.preventDefault();

        axios
          .post("http://localhost:4500/api/auth/register", newUser)
          .then(response => {
            console.log(response);
            props.history.push("/");
          });
      };

     return (
       <div>
            <h1>Welcome to the Register page</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="username"
             value={newUser.username}
             onChange={handleChange}
             placeholder="username"
           />

           <input
             type="text"
             name="password"
             value={newUser.password}
             onChange={handleChange}
             placeholder="password"
           />

           <button>Submit</button>
         </form>
       </div>
     );
}

export default Register