// import React from 'react'
// import Axios from 'axios'
// import { Outlet, useParams } from 'react-router-dom'
// import {Link} from "react-router-dom"




// function Chartdata() {

//  const [coindata , setcoinddata] =    React.useState([])

 



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
//     <div style={{display:'flex', flexWrap:'wrap' , marginTop:'20px'}}>
         
//          {

//             coindata.map(function(i)
//             {
//                return <div style={{border:'1px solid black', display:'flex', flexWrap:'wrap' , marginLeft:'10px' , width:'300px', height:'100px', marginTop:'10px'}}>
                  
//                   <img src={i.item.thumb}/>

//                   <Link to={i.item.name}>{i.item.name}</Link>
                  
                 

//                 </div>
//             })



//          }
 
//     <Outlet></Outlet>

//     </div>
//   )
// }

// export default Chartdata


import React from 'react';
import Axios from 'axios';
import { Outlet, Link } from 'react-router-dom';

function Chartdata() {
  const [coindata, setCoindata] = React.useState([]);

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
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
      {coindata.map(item => (
        <div
          key={item.item.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            marginLeft: '10px',
            width: '300px',
            height: '100px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            transition: 'transform 0.3s ease',
          }}
        >
          <img
            src={item.item.thumb}
            alt={item.item.name}
            style={{ width: '50px', height: '50px', marginRight: '10px' }}
          />
          <Link
            to={item.item.name}
            style={{
              color: '#333',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'color 0.3s ease',
            }}
          >
            {item.item.name}
          </Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
}

export default Chartdata;
