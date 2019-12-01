import motorcycles from './motorcycles.json';

export default class MotorcyclesService {
    static getMotorcycles() {
        return motorcycles ? motorcycles : [];
    }
}