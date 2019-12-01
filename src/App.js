import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Cars from './components/Cars'
import Motorcycle from './components/Motorcycle'
import Truck from './components/Truck'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter,Route, Button,Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
  
<div> 
  <body>
<HashRouter>
    <div>
      <ul>
     
        
        <Link to="/"><i class="fa fa-home" ></i></Link>
   
      
<div className='space'>
    <Link to="/Cars"className="btn btn-dark " role="button"> View Cars</Link>

     <span>   </span> 


<Link to="/Motorcycle"className="btn btn-dark " role="button"> View Motorcycle</Link>
 
<span>   </span> 
     
        <Link to="/Truck"className="btn btn-dark"role="button"> View Truck</Link>
     
        </div>
        {/* <button variant="contained" color="secondary">
  Secondary
</button> */}
        
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/Cars" component={Cars} />
      <Route path="/Motorcycle" component={Motorcycle} />
      <Route path="/Truck" component={Truck} />


    </div>
  </HashRouter>
  </body>
</div>
  );
}

export default App;
   {/* <React.Fragment>
        <BrowserRouter>
          <div>
            <Route path="/" component={Home} />
            <Route path="/Car" component={Car} />
          </div>
        </BrowserRouter>
      </React.Fragment> */}