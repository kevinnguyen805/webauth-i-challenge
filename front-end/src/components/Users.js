import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Users(props){

     const [data, setData] = useState([])

     const userData = () => {
          axios.get('http://localhost:4500/api/user')
          .then(response => {
               console.log(response)
               setData(response.data)
          })
     }

     useEffect(() => {
          userData();
     },[])


     return (
       <div>
         <h1>Welcome to the Users page</h1>

         {data.map(item => {
           return <div key={item.id}>{item.username}</div>;
         })}
       </div>
     );
}

export default Users