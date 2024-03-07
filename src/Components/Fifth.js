import React from 'react'
import {Doughnut} from "react-chartjs-2"
import {Chart,data} from 'chart.js/auto'


function Fifth() {

  const virusdata = [
    {name : 'Crowdsale investors', value : 100000},
    {name:'Foundation' , value:20000}

  ];

  const chartData = {
    labels: virusdata.map(item => item.name),
    datasets: [
      {
        label: 'Investors',
        data: virusdata.map(item => item.value),
        backgroundColor: ['blue','orange'], // Define background colors here
      },
    ],
  };
  return (
    <div style={{marginTop:'20px'}}>

<div class="tokenisation-box">
        <h1 style={{marginLeft:'-640px'}} class="main-heading">Tokenisation</h1>

        <h3 class="small-heading">Initial Distribution</h3>
     

        <Doughnut style={{height:'10px', width:'50px'}} data={chartData}/>
        
        <p id='p5' style={{marginLeft:'-10px'}} class="random-generator">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>


    </div>
  )
}

export default Fifth

