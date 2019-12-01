import cars from './cars.json';

export default class CarsService {
    static getCars() {
        return cars ? cars : [];
    }
}