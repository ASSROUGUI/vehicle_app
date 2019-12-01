import React ,{Component} from 'react';
import { Link , Router} from 'react-router-dom';
import './Home.css'
class Home extends Component{


    render(){

        return(
         
            <div className="vw-10 vh-10 primary-color d-flex align-items-center justify-content-center">
   <div className="lead"> <div className="jumbotron jumbotron-fluid bg-transparent">
     
           <div className="container secondary-color">
        <h1>choose your dream vehicle</h1>
       
           list of vehicles for you.
       
  
  
    </div>
   
 
  </div>
  </div>
            </div>
        )
    }
}
export default Home


// import React from "react";
// import App from "App";
// import { Link ,Route ,BrowserRouter} from "react-router-dom";

// export default () => (
//        <React.Fragment>
//         <BrowserRouter>
//           <div>
//             <Route path="/" component={} />
//             {/* <Route path="/car" component={car} /> */}
//           </div>
//         </BrowserRouter>
//       </React.Fragment>
// );