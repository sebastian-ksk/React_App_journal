import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { AppJournal } from '../journal/pages/AppJournal'


export const AppRouter = () => {
  return (
   <Routes>
    <Route
    path='/auth/*'
    element= {<AuthRoutes/>}
    />
    <Route
    path='/*'
    element= {<AppJournal/>}
    />
   </Routes>
  )
}
