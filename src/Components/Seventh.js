import React from 'react'
import Axios from 'axios'

function Seventh() {

 const [Fetcheddata , setfetched] =    React.useState([])

 const [AnotherFetcheddata , setAnotherfetched] =    React.useState([])

React.useEffect(function()
{

       Axios.get('https://api.coingecko.com/api/v3/search/trending').then(function(output)
       {

            console.log(output.data.coins)
            setfetched(output.data.coins)
            setAnotherfetched(output.data.nfts)

       }).catch(function(error)
       {
        console.log(error)
       })

},[])



  return (
    <div style={{marginTop:'20px'}}>

    <div className='finalbox1'>

        <h3 style={{marginLeft:'-1480px' ,marginTop:'10px'}}>Trending Now</h3>


    <div className='finalbox' >

 

{
    
    Fetcheddata.map(function(i)
    {
           return <div id='lastitems'>



           

<div id='firstrow' style={{display:'flex', flexDirection:'row'}}>
<img src={i.item.thumb} height="50px" width="50px"  style={{marginTop:'10px', marginLeft : '10px'}}/>
<h4 style={{marginLeft:'10px' , marginTop:'15px'}}>{i.item.symbol}</h4>

</div>


<div id='secondrow'>

<h4>{i.item.data.price}</h4>

</div>


<img src={i.item.data.sparkline} height="50px" width="50px"/>




</div>

})


}



</div>



<h4 style={{marginLeft:'-1480px' , marginTop:'10px'}}>You may also like</h4>

 

 <div className='finalbox'>

{


 AnotherFetcheddata.map(function(i)
 {
      return <div id='lastitems'>



      <div id='firstrow1' style={{display:'flex',flexDirection:'row'}}>

      <img src={i.thumb} height="50px" width="50px"  style={{marginTop:'10px', marginLeft : '10px'}} />
          <h5 style={{marginLeft:'10px' , marginTop:'15px'}}>{i.native_currency_symbol}</h5>

      </div>

      <div id='secondrow1'>

          <h5>{parseFloat(i.floor_price_24h_percentage_change).toFixed(2)}$</h5>

      </div>
     
      
      <img src={i.data.sparkline}/>


      </div>
 })









}
</div>



 </div>





    </div>

  )
}

export default Seventh