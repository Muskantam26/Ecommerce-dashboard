import React from 'react'
import Sidebar from '../component/Sidebar'
import Header from '../component/Header'
import DashboardStats from '../component/DashBoardStats'
import DashboardInsights from '../component/DashboardInsights'
import Products from '../component/Products'

const Dashboard = () => {
  return (
    
      <div className="flex-1 ">
        
        

        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Dashboard
          </h1>

          <DashboardStats />
        </div>
 <div className="mt-8">
        <DashboardInsights />
      </div>

      
      <div className="mt-8">
        <Products/>
      </div>
      </div>
    
  )
}

export default Dashboard
