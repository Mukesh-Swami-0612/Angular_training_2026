import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { OrderStatusPipe } from './order-status.pipe';

interface Order {
  id: number;
  customer: string;
  date: string;
  total: number;
  status: number;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, OrderStatusPipe],
  selector: 'app-orders',
  template: `
    <section class="orders-page">
      <div class="orders-header">
        <div>
          <h1>Orders</h1>
          <p>List of all current orders with formatted price, date, and delivery status.</p>
        </div>
        <a routerLink="/" class="secondary-button">Back to Home</a>
      </div>

      <table class="orders-table">
        <thead>
          <tr>
            <th>Order #</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let order of orders" class="order-row">
            <td class="order-id">#{{ order.id }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.date | date:'mediumDate' }}</td>
            <td class="order-total">{{ order.total | currency:'USD' }}</td>
            <td>
              <span class="status-badge" [ngClass]="'status-' + order.status">
                {{ order.status | orderStatus }}
              </span>
            </td>
            <td class="action-cell">
              <a [routerLink]="['/orders', order.id]" class="detail-link">View</a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
  styles: [
    `
      .orders-page {
        max-width: 1000px;
        margin: 0 auto;
        padding: 1rem;
      }

      .orders-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1.75rem;
      }

      .orders-header h1 {
        margin: 0;
        font-size: 2rem;
        color: #111827;
      }

      .orders-header p {
        margin: 0.5rem 0 0;
        color: #6b7280;
        max-width: 620px;
        line-height: 1.6;
      }

      .orders-table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      }

      .orders-table th {
        background: #f3f4f6;
        padding: 1rem 1rem;
        text-align: left;
        font-weight: 700;
        color: #374151;
        font-size: 0.95rem;
        border-bottom: 2px solid #e5e7eb;
      }

      .orders-table td {
        padding: 1rem;
        border-bottom: 1px solid #e5e7eb;
        color: #4b5563;
      }

      .order-row:hover {
        background: #f9fafb;
      }

      .order-id {
        font-weight: 700;
        color: #111827;
      }

      .order-total {
        font-weight: 700;
        color: #059669;
      }

      .status-badge {
        display: inline-block;
        padding: 0.45rem 0.9rem;
        border-radius: 999px;
        font-weight: 600;
        font-size: 0.85rem;
      }

      .status-1 {
        background: #fef3c7;
        color: #92400e;
      }

      .status-2 {
        background: #dbeafe;
        color: #1e40af;
      }

      .status-3 {
        background: #dcfce7;
        color: #166534;
      }

      .status-4 {
        background: #fee2e2;
        color: #991b1b;
      }

      .action-cell {
        text-align: center;
      }

      .detail-link {
        display: inline-block;
        padding: 0.5rem 0.9rem;
        background: #4f46e5;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 0.85rem;
        transition: background 0.2s ease;
      }

      .detail-link:hover {
        background: #4338ca;
      }

      .secondary-button,
      .primary-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1.25rem;
        border-radius: 999px;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.2s ease;
      }

      .secondary-button {
        background: #f3f4f6;
        color: #111827;
      }

      .secondary-button:hover {
        background: #e5e7eb;
      }
    `
  ]
})
export class OrdersComponent {
  orders: Order[] = [
    { id: 1057, customer: 'Alicia Myers', date: '2024-04-12', total: 249.99, status: 1 },
    { id: 1061, customer: 'Brian Johnson', date: '2024-04-14', total: 89.5, status: 2 },
    { id: 1065, customer: 'Carla Spencer', date: '2024-04-15', total: 398.0, status: 3 },
    { id: 1072, customer: 'Derek Watson', date: '2024-04-16', total: 149.75, status: 1 },
    { id: 1080, customer: 'Emily Hart', date: '2024-04-17', total: 56.23, status: 4 }
  ];
}
