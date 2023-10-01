import React from 'react';
import Link from 'next/link';
import "./progress.css"
import WeeklyBarChart from "../progressGraphs/weeklyBar";

const ProgressPage = () => {
  return (
    <div>
      <h1 class = "text-black text-2xl font-bold title"> Progress Page</h1> 
      <WeeklyBarChart />
    </div>
    
		
	
  );
};

export default ProgressPage;