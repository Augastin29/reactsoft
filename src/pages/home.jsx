// import React,{useState} from 'react'
// import {Child} from '../component/child'
// import {themecontext}from '../component/theme'
// import axios from 'axios'
// const salesData = [
//   { month: "Jan", sales: 12000 },
//   { month: "Feb", sales: 18000 },
//   { month: "Mar", sales: 15000 },
//   { month: "Apr", sales: 22000 },
//   { month: "May", sales: 19000 },
//   { month: "Jun", sales: 25000 },
//   { month: "Jul", sales: 28000 },
//   { month: "Aug", sales: 30000 },
//   { month: "Sep", sales: 26000 },
//   { month: "Oct", sales: 32000 },
//   { month: "Nov", sales: 35000 },
//   { month: "Dec", sales: 40000 }
// ];

// const prompt = `
// Analyze this one-year sales JSON.

// Return ONLY valid JSON in this format:

// {
//   "monthlyTrend": "",
//   "highestMonth": {
//     "month": "",
//     "sales": 0
//   },
//   "lowestMonth": {
//     "month": "",
//     "sales": 0
//   },
//   "growthPercentage": 0,
//   "spikes": [
//     {
//       "month": "",
//       "reason": ""
//     }
//   ],
//   "recommendedChart": "line",
//   "summary": ""
// }

// Sales JSON:
// ${JSON.stringify(salesData)}
// `;

// const response = await fetch("https://api.openai.com/v1/responses", {
//   method: "POST",
//   headers: {
//     "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     model: "gpt-5.5",
//     input: prompt
//   })
// });

// const result = await response.json();

// console.log(result);
// function Dashboard({ analysis }) {
//   return (
//     <div>

//       <div className="card">
//         <h3>Monthly Trend</h3>
//         <p>{analysis.monthlyTrend}</p>
//       </div>

//       <div className="card">
//         <h3>Highest Month</h3>
//         <p>{analysis.highestMonth.month}</p>
//         <h2>₹{analysis.highestMonth.sales}</h2>
//       </div>

//       <div className="card">
//         <h3>Lowest Month</h3>
//         <p>{analysis.lowestMonth.month}</p>
//         <h2>₹{analysis.lowestMonth.sales}</h2>
//       </div>

//       <div className="card">
//         <h3>Growth</h3>
//         <h2>{analysis.growthPercentage}%</h2>
//       </div>

//       <div className="card">
//         <h3>Spikes</h3>

//         {analysis.spikes.map((item, index) => (
//           <p key={index}>
//             <b>{item.month}</b> - {item.reason}
//           </p>
//         ))}

//       </div>

//       <div className="card">
//         <h3>Recommended Graph</h3>
//         <h2>{analysis.recommendedChart}</h2>
//       </div>

//     </div>
//   );
// }
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   BarChart,
//   Bar
// } from "recharts";

// function Chart({ type, data }) {

//   if (type === "line") {
//     return (
//       <LineChart width={800} height={400} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Line dataKey="sales" />
//       </LineChart>
//     );
//   }

//   if (type === "bar") {
//     return (
//       <BarChart width={800} height={400} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Bar dataKey="sales" />
//       </BarChart>
//     );
//   }

//   return null;
// }
// export const Homepage = () => {
//     const [state,setState]=useState('light')
    
    
    
//     return(
//     <>
//         <themecontext.Provider value={{state,setState}}>
       


//      <Child/>
//         </themecontext.Provider>
        
//    </> )
// }
import React, { useEffect, useState } from "react";
import { Child } from "../component/child";
import { themecontext } from "../component/theme";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar
} from "recharts";

const salesData = [
  { month: "Jan", sales: 12000 },
  { month: "Feb", sales: 18000 },
  { month: "Mar", sales: 15000 },
  { month: "Apr", sales: 22000 },
  { month: "May", sales: 19000 },
  { month: "Jun", sales: 25000 },
  { month: "Jul", sales: 28000 },
  { month: "Aug", sales: 30000 },
  { month: "Sep", sales: 26000 },
  { month: "Oct", sales: 32000 },
  { month: "Nov", sales: 35000 },
  { month: "Dec", sales: 40000 }
];

function Dashboard({ analysis }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>

      <div style={cardStyle}>
        <h3>Monthly Trend</h3>
        <p>{analysis.monthlyTrend}</p>
      </div>

      <div style={cardStyle}>
        <h3>Highest Month</h3>
        <h2>{analysis.highestMonth.month}</h2>
        <h3>₹{analysis.highestMonth.sales}</h3>
      </div>

      <div style={cardStyle}>
        <h3>Lowest Month</h3>
        <h2>{analysis.lowestMonth.month}</h2>
        <h3>₹{analysis.lowestMonth.sales}</h3>
      </div>

      <div style={cardStyle}>
        <h3>Growth</h3>
        <h2>{analysis.growthPercentage}%</h2>
      </div>

      <div style={cardStyle}>
        <h3>Recommended Graph</h3>
        <h2>{analysis.recommendedChart}</h2>
      </div>

      <div style={cardStyle}>
        <h3>Spikes</h3>

        {analysis.spikes.map((item, index) => (
          <p key={index}>
            <b>{item.month}</b> - {item.reason}
          </p>
        ))}
      </div>

    </div>
  );
}

function Chart({ type, data }) {

  if (type === "line") {
    return (
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    );
  }

  if (type === "bar") {
    return (
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#82ca9d" />
      </BarChart>
    );
  }

  return null;
}

const cardStyle = {
  width: 220,
  padding: 20,
  border: "1px solid #ddd",
  borderRadius: 10,
  boxShadow: "0px 2px 6px rgba(0,0,0,0.2)"
};

export const Homepage = () => {

  const [state, setState] = useState("light");
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {

    // Later replace this with API response

    const aiResponse = {
      monthlyTrend: "Sales increased steadily throughout the year.",

      highestMonth: {
        month: "Dec",
        sales: 40000
      },

      lowestMonth: {
        month: "Jan",
        sales: 12000
      },

      growthPercentage: 233.33,

      spikes: [
        {
          month: "Apr",
          reason: "46% increase compared to March"
        },
        {
          month: "Oct",
          reason: "Festival season sales"
        }
      ],

      recommendedChart: "line"
    };

    setAnalysis(aiResponse);

  }, []);

  if (!analysis) {
    return <h2>Loading...</h2>;
  }

  return (
    <themecontext.Provider value={{ state, setState }}>

      <Child />

      <h1>AI Sales Dashboard</h1>

      <Dashboard analysis={analysis} />

      <br />
      <br />

      <Chart
        type={analysis.recommendedChart}
        data={salesData}
      />

    </themecontext.Provider>
  );
};