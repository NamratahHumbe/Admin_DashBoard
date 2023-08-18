import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../Staticshart/StaticsCharts'
import './Staticstics.css'

const Statistics = () => {
    return (
        <div className='static-container theme-container'>
            <span className='static-title'>Overview Statistics</span>

            <div className='static-cards grey-container'>

                <div>
                    <div className='arrowIcon'>
                        <BsArrowUpShort />
                    </div>

                    <div className='static-card'>
                        <span>Top item this month</span><span>Office comps</span>
                    </div>
                </div>

                <div className='static-card'>
                    <span>Items</span><span>$ {groupNumber(455)}</span>
                </div>

                <div className='static-card'>
                    <span>Profit</span><span>$ {groupNumber(370000)}</span>
                </div>

                <div className='static-card'>
                    <span>Daily Average</span><span>$ {groupNumber(2000)}</span>
                </div>
            </div>
            <StatisticsChart />
        </div>
    )
}

export default Statistics