import React, { Component } from 'react';
import TruckList from './TruckList';
import TrucksService from '../services/TrucksService';
import { Card ,Button} from 'react-bootstrap';

export default class Truck extends Component {

    constructor() {
        super();

        this.state = {
            trucks: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ trucks: TrucksService.getTrucks() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <TruckList trucks={this.state.trucks} />
                    </div>
                </div>
            </div>
        );
    }
}