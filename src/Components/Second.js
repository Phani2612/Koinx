import React from 'react'
import '../App.css'
import Axios from 'axios'
import {BrowserRouter, Link , Routes , Route} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'


function Second() {

   const [Values , setvalues] =  React.useState()
   const [anothervalue , setanothervalue] = React.useState()
   const [bitvalues , setbitvalues] = React.useState([])

 
  React.useEffect(function()
  {

    Axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true").then(function(output)
    {
         setvalues(output.data.bitcoin.usd)
         setanothervalue(output.data.bitcoin.usd_24h_change)

    }).catch(function(error)
    {
        console.log(error)
    })

  },[])

  
  React.useEffect(function()
  {
    Axios.get('https://api.coingecko.com/api/v3/search/trending').then(function(output)
    {
       setbitvalues(output.data.coins[0])
    }).catch(function(error)
    {
        console.error(error)
    })

  },[])




  return (
    <div style={{marginTop:'520px'}}>

    <div className='links'>
             
         


          <a id='link1' href='#'>Overview</a>   

          <a id = 'link2' href='#'>Fundamentals</a>  

          <a id='link3' href='#'>News insights</a>

          <a to='/sentiments' href='#' id='link4'>Sentiments</a>    

          <a id='link5' href='#'>Team</a>

          <a id='link6' href='#'>Technicals</a>  

          <a id='link7' href='#'>Tokenomics</a>          
           
         

    </div>
        
<div class="performance-box">
    <div class="title">Performance</div>
    
    <div class="performance-values">
        <span>Today's low</span>
        <span>Today's high</span>
    </div>

    <h4 style={{marginLeft:'180px'}}>{Values}</h4>

    <div class="performance-meter">
        <div class="performance-meter-bar"></div>
        <FontAwesomeIcon style={{marginLeft:'-100px', marginTop:'10px'}} icon={faCaretUp}/>

    </div>


    <div style={{top:'-10px', marginBottom:'15px'}} class="performance-values">
        <span>{parseFloat(Values - anothervalue).toFixed(4)}</span>
        <span>{parseFloat(Values + anothervalue).toFixed(4)}</span>
    </div>

   



    <div class="performance-values">
        <span>52W low</span>
        <span>52W high</span>
    </div>

    <div class="performance-meter">
        <div class="performance-meter-bar"></div>
    </div>


    <div class="performance-values">
    <span>{parseFloat(Values - anothervalue).toFixed(4)}</span>
        <span>{parseFloat(Values + anothervalue).toFixed(4)}</span>
    </div>

    

    <div class="fundamentals">
        <div class="fundamentals-icon">&#128203;</div>
        <div class="fundamentals-title">Fundamentals!</div>
    </div>


    <div style={{display:'flex', margintop:'20px', marginleft:'20px', justifyContent:'space-between'}}>


    <div id='performancebox1'>

    <div id='performancccce' style={{display:'flex',justifyContent:'space-around'}}>
           <text style={{marginLeft:'-50px', textAlign:'justify'}}>bitcoin price:</text>
           <text>{Values}</text>
           
    </div>
    
    <div style={{display:'flex',justifyContent:'space-around'}}>
           <text style={{textAlign:'justify', marginLeft:'5px'}}>24h Low/ 24h High</text>
           <text>$16,382.07/$16,874.12$</text>
    </div>

    <div style={{display:'flex',justifyContent:'space-around'}}>
           <text style={{textAlign:'justify'}}>7d Low/ 7d High</text>
           <text>$16,382.07/$16,874.12$</text>
    </div>

    <div style={{display:'flex',justifyContent:'space-around'}}>
           <text style={{marginLeft:'-35px',textAlign:'justify'}}>Trading volume</text>
           <text>12456</text>
    </div>

    <div style={{display:'flex',justifyContent:'space-around'}}>
           <text style={{marginLeft:'-50px',textAlign:'justify'}}>Market cap rank</text>
           <text>12456</text>
    </div>



</div>

<div id='performancebox2'>

     <div style={{display:'flex' , justifyContent:'space-around'}}>

        <text style={{textAlign:'justify', marginLeft:'-45px'}}>Market Cap</text>
        <text style={{marginleft:'40px'}}>12354</text>


     </div>

     <div style={{display:'flex' , justifyContent:'space-around'}} >

        <text style={{textAlign:'justify' , marginLeft:'-10px'}}>Market cap dominance</text>
        <text style={{marginLeft:'30px'}}>12457</text>

     </div>


</div>




    </div>





</div>

        
    </div>
  )
}

export default Second