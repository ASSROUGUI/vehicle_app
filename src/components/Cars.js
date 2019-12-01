import React, { Component } from 'react';
import CarList from './CarList';
import CarService from '../services/CarsService';
import { Card ,Button} from 'react-bootstrap';
import './Cars.css'

export default class Cars extends Component {

    constructor() {
        super();

        this.state = {
            cars: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ cars: CarService.getCars() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">

                        <CarList cars={this.state.cars} />
                    </div>
                </div>
              
                {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
            </div>
        );
    }
}