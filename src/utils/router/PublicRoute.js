import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/authHooks'

const PublicRoute = () => {
  const {isAuth}=useAuth()
  console.log(isAuth)
  return (
  <> {!isAuth? <Outlet/> : <Navigate to='/'/>}</>
  )
}

export default PublicRoute