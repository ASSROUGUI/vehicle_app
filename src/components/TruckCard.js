import React ,{Component} from 'react';
import { Link , Router} from 'react-router-dom';
import PropTypes from 'prop-types';

     
const TruckCard = (props) => (      
            
         
                <div className="truck-card">
             
            <p> </p>
                    <div className="truck-card card">
                    <img className="card-img-top" src={props.truck.imageUrl} alt="" height='100%' width='100%'/>
                      <div></div>
                    <div className="card-body">
                        <h4 className="card-title">{props.truck.name}</h4>
                            <div className="card-subtitle mb-2 text-muted">Fuel Type : {props.truck.fuelType}</div>
                            <div className="card-subtitle mb-2 text-muted">Number of Wheels : {props.truck.WheelsNo}</div>
                            <div className="card-subtitle mb-2 text-muted">Engine RPM : {props.truck.engineRPM}</div>
                            <div className="card-subtitle mb-2 text-muted">Torque : {props.truck.Torque}</div>
                            <div className="card-subtitle mb-2 text-muted">Horse Power : {props.truck.horsePower}</div>
                            <div className="card-subtitle mb-2 text-muted">Color : {props.truck.Color}</div>
                            <div className="card-subtitle mb-2 text-muted">Number of seats : {props.truck.seatsNo}</div>
                            <div className="card-subtitle mb-2 text-muted">Maker : {props.truck.Maker}</div>
                            <div className="card-subtitle mb-2 text-muted">Make Year : {props.truck.year}</div>
                            <div className="card-subtitle mb-2 text-muted">Max Load Weight : {props.truck.LoadWeight}</div>

                        </div>
                     
                            <div className="clearfix">
                                <div className="float-left mt-1">
                                </div>
                                <div className="card-footer-badge float-right badge badge-primary badge-pill"></div>
                            </div>

                    </div>
               
    </div>
         
          
  
    
  

  

        );

       TruckCard.defaultProps = {
            truck: {}
        };
        
        TruckCard.propTypes = {
            truck: PropTypes.object
        };
 
export default TruckCard