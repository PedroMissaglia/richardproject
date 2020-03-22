import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Product {
    id: string;
    name: string;
    type: string;
    description: string;
    expirationDate: Date;
    status: boolean;
}