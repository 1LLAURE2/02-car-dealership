import { v4 as uuid } from 'uuid';
import { ICar } from "src/cars/interfaces/car.interface";

export const CARS_SEED: ICar[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Wolkswagen',
        model: 'Escarabajo'
    },
    {
        id: uuid(),
        brand: 'Jepp',
        model: 'Cherokee'
    }
]