import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
const {user,pass}=useContext(RecipeContext)


  return user==="test" && pass==="test" ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouter