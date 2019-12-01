import React, { Component } from 'react';
import MotorcycleList from './MotorcycleList';
import MotorcyclesService from '../services/MotorcyclesService';
import { Card ,Button} from 'react-bootstrap';

export default class Motorcycle extends Component {

    constructor() {
        super();

        this.state = {
            motorcycles: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ motorcycles: MotorcyclesService.getMotorcycles() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MotorcycleList motorcycles={this.state.motorcycles} />
                    </div>
                </div>
            </div>
        );
    }
}