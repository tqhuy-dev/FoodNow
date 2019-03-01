import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFood } from '../shared/interface/IFood.interface';
import { HttpClient } from '@angular/common/http';
import { ApiConstant } from '../shared/constant/api.constant';
import { IResponse } from '../shared/interface/IResponse.interface';
import { IBill } from '../shared/interface/IBill.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private _foods: BehaviorSubject<IFood[]> = new BehaviorSubject([]);
    private _bill: BehaviorSubject<IBill> = new BehaviorSubject({
        createDate: '',
        totalMoney: 0,
        detail: []
    });
    get getListFood() {
        return this._foods.asObservable();
    }
    get getBill() {
        return this._bill.asObservable();
    }
    addFoodInMenu(food: IFood) {
        const bill = this._bill.getValue();
        const menuFoods = bill.detail;
        const index = menuFoods.findIndex(o => o.ID === food.ID);
        if (index > -1) {
            menuFoods[index].total += 1;
        } else {
            food.total = 1;
            menuFoods.push(food);
        }
        bill.totalMoney = bill.totalMoney + food.price;
    }
    removeFoodInMenu(food: IFood) {
        const bill = this._bill.getValue();
        const menuFoods = bill.detail;
        const index = menuFoods.findIndex(o => o.ID === food.ID);
        if (index > -1) {
            menuFoods[index].total -= 1;
            if (menuFoods[index].total === 0) {
                menuFoods.splice(index , 1);
            }
        }
        bill.totalMoney = bill.totalMoney - food.price;
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
