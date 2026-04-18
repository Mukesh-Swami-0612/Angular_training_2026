import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus',
  standalone: true,
  pure: true
})
export class OrderStatusPipe implements PipeTransform {
  transform(value: number | string | null | undefined): string {
    switch (value) {
      case 1:
      case '1':
        return 'Pending';
      case 2:
      case '2':
        return 'Shipped';
      case 3:
      case '3':
        return 'Delivered';
      case 4:
      case '4':
        return 'Returned';
      default:
        return 'Unknown';
    }
  }
}
