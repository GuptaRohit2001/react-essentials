import UserContext from "../context/UserContext"
import React, { useContext } from 'react'

const Profile = () => {
  const {user} = useContext(UserContext)
  
  if(!user) return <div>please login</div>

  return <div>Welcome {user.username}</div>
}

export default Profile