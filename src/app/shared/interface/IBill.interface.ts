import { IFood } from './IFood.interface';

export interface IBill {
    createDate: String;
    totalMoney: number;
    detail: IFood[];
}
