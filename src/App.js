// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar';
// import {BrowserRouter, Link , Routes , Route} from "react-router-dom"
// import First from './Components/First';
// import Second from './Components/Second';
// import Third from './Components/Third';
// import Fourth from './Components/Fourth';
// import Fifth from './Components/Fifth';
// import Sixth from './Components/sixth';
// import Seventh from './Components/Seventh';
// import Bitcoin from './Components/Bitcoin';
// import Chartdata from './Components/Chartdata';
// import Mainchart from './Components/Mainchart';


// function App() {
//   return (
     
//      <BrowserRouter>

//      <Routes>
    
//     <Route path='/bitcoin' element={<Bitcoin/>}></Route>

//     <Route path='/chart' element={<Chartdata/>}>

            
//             <Route path=':coinname' element={<Mainchart/>}></Route>


//     </Route>

//      </Routes>
     
     
//      <div className="App">
     
     

//      <Navbar/>
   
//      <ul className="nav-links" style={{marginLeft:'-1240px'}}>
//            <li><Link href="#">Cryptocurrencies</Link></li>
//            <li className="separator"> </li>
//            <li><Link to='/bitcoin'>Bitcoin</Link></li>
          
//          </ul>
   
   
//          <First/>
//         <Second/>
//         <Third/>
//         <Fourth/>
//         <Fifth/>
//         <Sixth/>
//         <Seventh/>
        
   
//        </div>
       
     
     
     
//      </BrowserRouter>
     
     
     
    
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Link , Routes , Route} from "react-router-dom"
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import Fourth from './Components/Fourth';
import Fifth from './Components/Fifth';
import Sixth from './Components/sixth';
import Seventh from './Components/Seventh';
import Bitcoin from './Components/Bitcoin';
import Chartdata from './Components/Chartdata';
import Mainchart from './Components/Mainchart';


function App() {
  return (
     
     
     
     
     <div className="App">
     
     

     <Navbar/>
   
     <ul className="nav-links" style={{marginLeft:'-1240px'}}>
           <li><Link href="#">Cryptocurrencies</Link></li>
           <li className="separator"> </li>
           <li><Link to='/bitcoin'>Bitcoin</Link></li>
           
          
         </ul>
   
   
         <First/>
        <Second/>
        <Third/>
        <Fourth/>
        <Fifth/>
        <Sixth/>
        <Seventh/>
        
   
       </div>
       
     
     
     
     
     
     
     
    
  );
}

export default App;





