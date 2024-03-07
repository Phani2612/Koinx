import React from 'react'
import { BrowserRouter , Link , Routes, Route } from 'react-router-dom'
import App from './App'
import Chartdata from './Components/Chartdata'
import Mainchart from './Components/Mainchart'
import Bitcoin from './Components/Bitcoin'

function Parent() {
  return (
      
   <div>


<BrowserRouter>
    
    
     {/* <Link to='/home'>Home</Link> */}

     {/* <Link to='/chart'>Chart</Link> */}

     <Routes>
        
         <Route path='' element={<App/>}></Route>

         <Route path='/chart' element={<Chartdata/>}>

              <Route path=':coinname' element={<Mainchart/>}></Route>
         </Route>

         <Route path='/bitcoin' element={<Bitcoin/>}></Route>
        
        </Routes>    
    
    
    </BrowserRouter>






   </div>
  )
}

export default Parent