import React from 'react'
import DashborardContent from './dashComponent/dashboardContent'
import DashborardHeader from './dashComponent/dashboardHeader'
import DashborardProduct from './dashComponent/dashboardProduct'

function MainDashboard() {
  return (
    <>
        <div>MainDashboard</div>
        <DashborardHeader />
        <DashborardContent />
        <DashborardProduct />
    </>
  )
}

export default MainDashboard