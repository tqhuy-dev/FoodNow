import { IFood } from './IFood.interface';

export interface IBill {
    createDate: String;
    totalMoney: Number;
    detail: IFood[];
}
