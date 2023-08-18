import './DashBoard.css';
import React from 'react';
import { cardsData, groupNumber } from '../../data';
import Statistics from '../../components/Staticstics/Staticstics';
import Orders from '../../components/Orders/Orders';

const Dashboard = () => {
  return <div className='dashboard-container'>
    <div className='dashboard1'>
      <div className={'dashboardHead1 theme-container'}>
        <div className='dashboard-head'>
          <span>Dashboard</span>

          <div className='durationButton'>
            <select>
              <option value="">1 week</option>
              <option value="">1 month</option>
              <option value="">1 year</option>
            </select>
          </div>
        </div>
      <div className='dashboard-cards'>
            {
            cardsData.map((card, index) => (
              <div className='dashboard-card'>
                <div className='dashboard-cardHead'>
                  <span>{card.title}</span>
                  <span>+{card.change}</span>
                </div>

                <div className='dashboard-cardAmount'>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Statistics />
    </div>
    <Orders />
  </div>
}

export default Dashboard
