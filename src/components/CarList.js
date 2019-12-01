import React from 'react';
import PropTypes from 'prop-types';
import CarCard from './CarCard';

const getCars = (cars) => {
    return (
        <div className="card-deck">
            {
                cars.map(car => <CarCard key={car.id} car={car} />)
            }
        </div>
    );
};

const CarList = (props) => (
    <div>
        {getCars(props.cars)}
    </div>
);

CarList.defaultProps = {
    cars: []
};

CarList.propTypes = {
    cars: PropTypes.array
};

export default CarList;