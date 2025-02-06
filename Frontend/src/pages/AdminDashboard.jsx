import React, { useContext } from 'react'
import {  userAuth } from '../context/AuthContext'
import Leave from '../components/LeaveDetalOfAdminDashboard/Leave';
import DashboardOverview from '../components/LeaveDetalOfAdminDashboard/DashboardOverview';


function AdminDashboard() {
  const {user} = useContext(userAuth)
  return (
    <div className='container'>     
         <DashboardOverview />
        <Leave />
    </div>
  )
}

export default AdminDashboard