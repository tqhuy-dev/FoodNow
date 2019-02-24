import { Pipe, PipeTransform } from '@angular/core';
import { ConstantValue } from '../constant/constant';

@Pipe({
    name: 'status'
})

export class StatusPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        switch (value) {
            case 0: {
                return ConstantValue.STATUS_CLOSED.STATUS;
            }
            case 1: {
                return ConstantValue.STATUS_OPEN.STATUS;
            }
            case 2: {
                return ConstantValue.STATUS_OVER_STOCK.STATUS;
            }
        }
    }
}
