import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../features/auth/Login'
import { App } from '../App'

const status = 'authenticated'

export const AppRouter = () => {
  return (
    <Routes>
        {
            (status === 'authenticated') 
            ?<Route path="/*" element={ <App /> } />
            :<Route path="/auth/login" element={ <Login />} />
        }

        <Route path="/*" element={ <Navigate to='/auth/login'/> } />

    </Routes>
  )
}
