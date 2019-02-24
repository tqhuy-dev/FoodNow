import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFood } from '../shared/interface/IFood.interface';
import { HttpClient } from '@angular/common/http';
import { ApiConstant } from '../shared/constant/api.constant';
import { IResponse } from '../shared/interface/IResponse.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private _foods: BehaviorSubject<IFood[]> = new BehaviorSubject([]);
    get getListFood() {
        return this._foods.asObservable();
    }

    getFoodsFromServer(store: string , type: string) {
        return this.httpClient.get(ApiConstant.BASE_URL + ApiConstant.FOODS_API + store + '/type/' + type)
        .subscribe((response: IResponse) => {
            this._foods.next(response.message !== 'No Data' ? response.data.map((item) => {
                const food: IFood = {
                    ID: item._id,
                    IDStore: item.idStore,
                    name: item.foodName,
                    type: item.typeFood,
                    price: item.price,
                    status: item.status,
                    trend: item.trend,
                    totalBooking: item.totalBooking
                };
                return food;
            }) : []);
        });
    }
    constructor(
        private httpClient: HttpClient
    ) { }
}
