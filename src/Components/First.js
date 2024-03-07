// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from 'react';
import '../App.css'
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

function First() {
  const container = useRef();

  const [Info , setinfo] = useState([])

  const[another , setanother] = useState([])

  useEffect(function()
  {
    
    Axios.get('https://api.coingecko.com/api/v3/search/trending').then(function(output)
    {

        setinfo(output.data.coins)
        // console.log(output.data.coins)
        console.log(output.data.coins) 

        

        


    }).catch(function(error)
    {
        console.log(error)
    })

  },[])

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": true,
          "backgroundColor": "rgba(255, 255, 255, 1)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "withdateranges": true,
          "range": "1D",
          "details": true,
          "calendar": false,
          "studies": [
            "STD;24h%Volume",
            "STD;Average%Day%Range"
          ],
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div style={{marginTop:'40px'}}>


<div className="additional-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" height="50px" width="50px" alt="Your Image" className="image" />
        <h1>Bitcoin</h1>
        <text style={{marginTop:'15px' , fontSize:'20px' , marginLeft:'10px'}}>BTC</text>
        <button style={{marginLeft:'50px'}} class="btn btn-secondary" variant="primary">#Rank 1</button>
      </div>
    <div className='firstbody'>
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" , borderBottomLeftRadius:'10px'}}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
    </div>


<div className='trendingbox'>

    <h1 style={{marginBottom:'15px'}}>Trending coins(24h)</h1>

    {

    
       Info.map(function(i,j)
       {
             
        //  console.log( i)



            if(j <  3)
            {
                return <div  style={{display:'flex', justifyContent:'space-around'}}>

             <img src={i.item.thumb} style={{marginLeft:'15px' , marginBottom:'15px'}}/>
             <h4 style={{marginLeft:'15px' , marginTop:'15px'}}>{i.item.name}</h4>
            
            {/* {console.log(i.item.data.price_change_percentage_24h)} */}

           

{
  Object.keys(i.item.data.price_change_percentage_24h).map((currency, idx) => (

    <div id='percentage' key={idx}>
     
      {currency === 'usd' ? <h4 id='percentage' style={{fontSize:'20px' , marginLeft:'120px' , marginTop:'15px', background:'#9fd199'}}><FontAwesomeIcon icon={faCaretUp} />
{parseFloat(i.item.data.price_change_percentage_24h[currency]).toFixed(2)}%</h4> : null}


    </div>

  ))
}


             
                </div>
            }
            
           
       })



    }
     


</div>

<div class="container1">
    <h1>Get started with Koinx for free</h1>
    <p>With our range of features that you can equip for free, Koinx allows you to be more educated and aware of your tax reports.</p>

    <img height="100px" width="100px" src='https://img.etimg.com/thumb/width-1200,height-900,imgsize-1916330,resizemode-75,msid-92675493/tech/funding/crypto-tax-startup-koinx-raises-1-5-million-funding.jpg'/>

    <a style={{marginTop:'20px'}} href="#" class="btn">Get started for free -&gt;</a>
</div>


    </div>
  );
}

export default memo(First);













//another logic

 {/* {Object.entries(i.item.data.price_change_percentage_24h).map(([currency, percentage], idx) => (
              <div key={idx}>
                <p>{currency}: {percentage}</p>
              </div>
            ))} */}