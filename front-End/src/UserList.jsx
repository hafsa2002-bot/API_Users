import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UserList() {
    const [ listOfUSer , setListOfUSer  ] = useState()
    useEffect(() => {
        
            axios.get("http://localhost:4000/users")
            .then(response => {
                console.log("data from back-End: ", response.data)
                setListOfUSer(response.data)})
            .catch(error => console.log("ERROR: ", error))
        
    }, [])
  return (
    <div className='flex flex-wrap gap-10 justify-center'>
        {   listOfUSer ? listOfUSer.map((user, index) => (
    
                <div key={index} className='border rounded-xl w-1/5 p-3'>
                    {/* {console.log("user", user)} */}
                    <h1><strong>Name: </strong>  {user.name}</h1>
                    <h1><strong>User Name: </strong>  {user.username}</h1>
                    <h1><strong>Email: </strong> {user.email}</h1>
                    <h1><strong> Adress: </strong>{user.address.city}, {user.address.street} N°: {user.address.suite} </h1>
                    <h1><strong>Phone: </strong>{user.phone} </h1>
                    <h1><strong>Website: </strong><a href={user.website} >{user.website}</a> </h1>
                </div>
            ))
            : <h1 className='text-5xl text-center font-bold mt-64'>Loading ...</h1>
        }
    </div>
  )
}

export default UserList
