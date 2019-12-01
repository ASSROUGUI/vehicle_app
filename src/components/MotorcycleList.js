import React from 'react';
import PropTypes from 'prop-types';
import MotorcycleCard from './MotorcycleCard';

const getMotorcycle = (motorcycles) => {
    return (
        <div className="card-deck">
            {
                motorcycles.map(motorcycle => <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />)
            }
        </div>
    );
};

const MotorcycleList = (props) => (
    <div>
        {getMotorcycle(props.motorcycles)}
    </div>
);

MotorcycleList.defaultProps = {
    motorcycle: []
};

MotorcycleList.propTypes = {
    motorcycle: PropTypes.array
};

export default MotorcycleList;