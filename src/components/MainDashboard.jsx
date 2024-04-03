import React from 'react'
import './dashComponent/maindash.css'
import DashborardContent from './dashComponent/dashboardContent'
import DashborardHeader from './dashComponent/dashboardHeader'
import DashborardProduct from './dashComponent/dashboardProduct'
import Sidebar from './dashComponent/dashSidebar'

function MainDashboard() {
  return (
    <>
      <div className="dashboard-layout">
        <div className='flex-one'>
          <Sidebar />
        </div>
        <div className="flex-two">
          <DashborardHeader />
          <DashborardContent />
          <DashborardProduct />
        </div>
      </div>
    </>
  );
}

export default MainDashboard