import trucks from './trucks.json';

export default class TrucksService {
    static getTrucks() {
        return trucks ? trucks : [];
    }
}