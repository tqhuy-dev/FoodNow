import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'trend'
})

export class TrendPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        switch (value) {
            case 0: {
                return 'Best Seller';
            }
            case 1: {
                return 'Highest Rated';
            }
        }
    }
}
