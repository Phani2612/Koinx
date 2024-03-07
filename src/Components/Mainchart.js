// import React from 'react'
// import { useParams, Link } from 'react-router-dom'
// import Axios from 'axios'

// function Mainchart() {

//     const [coindata , setcoinddata] =    React.useState([])

 
//     const {coinname} = useParams()
//     console.log(coinname)


// React.useEffect(function()
// {

//     Axios.get('https://api.coingecko.com/api/v3/search/trending').then(function(output)
//     {
//         setcoinddata(output.data.coins)
        
//     }).catch(function(error)
//     {
//         console.error(error)
//     })

// },[])

  
//   return (
//     <div style={{marginTop:'200px', marginLeft:'-500px'}}>

// <Link to='/'>Home</Link>

// {
  

//   coindata.map(function(i)
// {
//     {console.log(coindata)}
//       if(i.item.name === coinname)
//       {
//            return <div style={{display:'flex'}} >
            
//             <div style={{border:"1px solid black" , backgroundColor:'white'}}>

//             {console.log(i)}

// <img src={i.item.data.sparkline} height="500px" width="500px" />
//             </div>

//             <div>
//                 <h4>Coin Id : {i.item.coin_id}</h4>
//                 <h4>Market Cap rank:{i.item.market_cap_rank}</h4>
//                 <h4>Price : {i.item.data.price}</h4>
//                 <h4>Total volume : {i.item.data.total_volume}</h4>
//                 <h4>Price change24hr : {i.item.data.price_change_percentage_24h.usd}</h4>

//                 </div>


//            </div>
//       }
// })

// // style={{border:"1px solid black"}}



// }



//     </div>
//   )
// }

// export default Mainchart




import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Axios from 'axios';

function Mainchart() {
  const [coindata, setCoindata] = React.useState([]);
  const { coinname } = useParams();
  console.log(coinname);

  React.useEffect(() => {
    Axios.get('https://api.coingecko.com/api/v3/search/trending')
      .then(output => {
        setCoindata(output.data.coins);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ marginTop: '200px', marginLeft: '-500px' }}>
      <Link to="/">Home</Link>
      {coindata.map(item => {
        if (item.item.name === coinname) {
          return (
            <div key={item.item.coin_id} style={{ display: 'flex' }}>
              <div
                style={{
                  border: '1px solid black',
                  backgroundColor: 'white',
                }}
              >
                <img
                  src={item.item.data.sparkline}
                  height="500px"
                  width="500px"
                />
              </div>
              <div>
                <h4>Coin Id : {item.item.coin_id}</h4>
                <h4>Market Cap rank: {item.item.market_cap_rank}</h4>
                <h4>Price : {item.item.data.price}</h4>
                <h4>Total volume : {item.item.data.total_volume}</h4>
                <h4>
                  Price change 24hr :{' '}
                  {item.item.data.price_change_percentage_24h.usd}
                </h4>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Mainchart;
