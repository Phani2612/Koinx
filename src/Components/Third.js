import React from 'react'
import '../App.css'

function Third() {
  return (
    <div className='thirdbody'>

                   <div className='firstsection' >

                          <h3 style={{paddingTop:'10px' , marginLeft:'-620px'}}>Sentiments</h3>
                          <h4 style={{paddingTop:'10px' , marginLeft:'-630px' , marginBottom:'10px'}}>Key Events !</h4>


                          

                               <div className='boxes'>

                               <div style={{backgroundColor:'#bee4ed'}}    id='box1'>

                                     <img style={{marginLeft:'-150px', marginTop:'10px'}} src='https://static.vecteezy.com/system/resources/previews/014/031/939/original/increase-icons-design-in-blue-circle-png.png' height="50px" width="50px" />    
                                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>              
                               </div>

                               <div style={{backgroundColor:'#d0edbe'}} id='box2'>

                               <img style={{marginLeft:'-150px', marginTop:'10px'}} src='https://pics.craiyon.com/2023-06-25/8be50c7cd387443a9614f17c102fed64.webp' height="50px" width="50px" />                  
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                               </div>

                               <div style={{backgroundColor:'#d9ae80'}} id='box3'>
                                
                               <img style={{marginLeft:'-150px', marginTop:'10px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTsHcRYz_edomoq90iojbv8jSr38hLK4PC-H5KdUh1H1MY7uBr3PTocwJI7k8JRfd8Dww&usqp=CAU' height="50px" width="50px" />                  
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                               </div>


                               </div>



                         

                   </div>



        <div class="secondsection">

        <h2 style={{marginTop:'20px' , marginLeft:'-500px'}}>Analyst Estimates !</h2>

        <div class="analyst-estimates">
            
            <div class="circle">76%</div>
            
            <div class="details">
               <div class="meter-box buy"><b style={{marginTop:'-100px'}}>Buy</b></div>
                <div class="meter-box hold"><b>Hold</b></div>
                <div class="meter-box sell"><b>Sell</b></div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Third