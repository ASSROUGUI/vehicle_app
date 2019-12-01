import React from 'react';
import PropTypes from 'prop-types';
import TruckCard from './TruckCard';

const getTrucks = (trucks) => {
    return (
        <div className="card-deck">
            {
                trucks.map(truck => <TruckCard key={truck.id} truck={truck} />)
            }
        </div>
    );
};

const TruckList = (props) => (
    <div>
        {getTrucks(props.trucks)}
    </div>
);

TruckList.defaultProps = {
    truck: []
};

TruckList.propTypes = {
    truck: PropTypes.array
};

export default TruckList;