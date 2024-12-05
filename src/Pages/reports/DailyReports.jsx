import React from 'react';
import PieChartComponent from './DailyPi';
import Dailybar from './DailyBar';

const DailyReports = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold text-gray-800 mb-10'>Daily Reports Chart</h2>
            <div className='flex min-w-full  justify-center items-center gap-3'>
            
                <PieChartComponent></PieChartComponent>
                <Dailybar></Dailybar>
            </div>
        </div>
    );
}

export default DailyReports;
