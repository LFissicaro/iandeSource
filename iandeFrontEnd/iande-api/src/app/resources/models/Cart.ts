import { Product } from '../models/Product';

export class Cart{
    id: number;
    price: number;
    finalizedTime: Date;
    products: Product[];
    deleted: boolean;
}