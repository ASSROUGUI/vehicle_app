import React ,{Component} from 'react';
// import './Car.css'
import { Link , Router} from 'react-router-dom';
import PropTypes from 'prop-types';     

     
const MotorcycleCard = (props) => (      
            
         
                <div className="car-card">
             
            <p> </p>
                    <div className="car-card card">
                    <img className="card-img-top" src={props.motorcycle.imageUrl} alt="" height='93px' width='-99px'/>
                        <div className="card-body">
                            <h4 className="card-title">{props.motorcycle.name}</h4>
                            <div className="card-subtitle mb-2 text-muted">Fuel Type: {props.motorcycle.fuelType}</div>
                            <div className="card-subtitle mb-2 text-muted">Number of Wheels : {props.motorcycle.WheelsNo}</div>
                            <div className="card-subtitle mb-2 text-muted">Engine RPM : {props.motorcycle.engineRPM}</div>
                            <div className="card-subtitle mb-2 text-muted">Torque : {props.motorcycle.Torque}</div>
                            <div className="card-subtitle mb-2 text-muted">Horse Power : {props.motorcycle.horsePower}</div>
                            <div className="card-subtitle mb-2 text-muted">Color : {props.motorcycle.Color}</div>
                            <div className="card-subtitle mb-2 text-muted">Number of seats : {props.motorcycle.seatsNo}</div>
                            <div className="card-subtitle mb-2 text-muted">Maker : {props.motorcycle.Maker}</div>
                            <div className="card-subtitle mb-2 text-muted">Make Year : {props.motorcycle.year}</div>


                        </div>
                        <div className="card-footer">
                            <div className="clearfix">
                                <div className="float-left mt-1">
                                </div>
                            </div>
                        </div>
                    </div>
               
    </div>
         
          
    //    {listItems } 
    
  

  

        );

        MotorcycleCard.defaultProps = {
            motorcycle: {}
        };
        
        MotorcycleCard.propTypes = {
            motorcycle: PropTypes.object
        };
 
export default MotorcycleCard