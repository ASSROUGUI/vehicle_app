import React ,{Component} from 'react';
// import './Car.css'
import { Link , Router} from 'react-router-dom';
import PropTypes from 'prop-types';
// class Car extends Component{
// constructor(props){
//     super(props);
       
//         //    let Data=[
//         //         {id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20},
//         //         {id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15},
//         //         {id: 71, item: 'socks', color: 'black', size: 'all', price: 5},
//         //         ]
        
    
// }

//     render(){
      
//         const data =[{"name":"test",'l':'yyyy'},{"name":"test2",'l':"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
//     }];
//         const listItems = data.map((data) => <ul key={data.id}>,name={data.name}   ,img= <img 
//         src={data.l}/></ul>);
//         return(
       
const CarCard = (props) => (      
            
         
                <div className="car-card">
             
            <p> </p>
                    <div className="car-card card">
                    <img className="card-img-top" src={props.car.imageUrl} alt="" height='100%' width='100%'/>
                        <div className="card-body">
                            <h4 className="card-title">{props.car.name}</h4>
                            <div className="card-subtitle mb-2 text-muted">Fuel Type : {props.car.fuelType}</div>
                            <div className="card-subtitle mb-2 text-muted">Number of Wheels : {props.car.WheelsNo}</div>
                            <div className="card-subtitle mb-2 text-muted">Engine RPM : {props.car.engineRPM}</div>
                            <div className="card-subtitle mb-2 text-muted">Torque : {props.car.Torque}</div>
                            <div className="card-subtitle mb-2 text-muted">Horse Power : {props.car.horsePower}</div>
                            <div className="card-subtitle mb-2 text-muted">Color : {props.car.Color}</div>
                            <div className="card-subtitle mb-2 text-muted">Number of seats : {props.car.seatsNo}</div>
                            <div className="card-subtitle mb-2 text-muted">Maker : {props.car.Maker}</div>
                            <div className="card-subtitle mb-2 text-muted">Make Year : {props.car.year}</div>


                        </div>
                        <div className="card-footer">
                            <div className="clearfix">
                                <div className="float-left mt-1">
                                </div>
                                <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.car.rating}</div>
                            </div>
                        </div>
                    </div>
               
    </div>
         
          
    //    {listItems } 
    
  

  

        );

       CarCard.defaultProps = {
            car: {}
        };
        
        CarCard.propTypes = {
            car: PropTypes.object
        };
 
export default CarCard