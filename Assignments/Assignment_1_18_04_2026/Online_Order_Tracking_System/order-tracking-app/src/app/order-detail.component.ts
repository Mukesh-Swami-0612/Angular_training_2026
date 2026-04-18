import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  selector: 'app-order-detail',
  template: `
    <section class="order-detail-page">
      <div class="detail-header">
        <a routerLink="/orders" class="back-button">← Back to Orders</a>
        <h1 *ngIf="order">Order #{{ order.id }}</h1>
      </div>

      <div *ngIf="order; else notFound" class="detail-card">
        <div class="detail-row">
          <label>Customer Name:</label>
          <span>{{ order.customer }}</span>
        </div>
        <div class="detail-row">
          <label>Order Date:</label>
          <span>{{ order.date | date:'fullDate' }}</span>
        </div>
        <div class="detail-row">
          <label>Total Amount:</label>
          <span class="highlight">{{ order.total | currency:'USD' }}</span>
        </div>
        <div class="detail-row">
          <label>Delivery Status:</label>
          <span class="status-badge" [ngClass]="'status-' + order.status">
            {{ order.status | orderStatus }}
          </span>
        </div>
      </div>

      <ng-template #notFound>
        <div class="not-found">
          <p>Order not found.</p>
          <a routerLink="/orders" class="primary-button">Return to Orders</a>
        </div>
      </ng-template>
    </section>
  `,
  styles: [
    `
      .order-detail-page {
        max-width: 680px;
        margin: 0 auto;
        padding: 1rem;
      }

      .detail-header {
        margin-bottom: 1.75rem;
      }

      .back-button {
        display: inline-block;
        color: #4f46e5;
        text-decoration: none;
        font-weight: 600;
        margin-bottom: 1rem;
        transition: color 0.2s ease;
      }

      .back-button:hover {
        color: #4338ca;
      }

      .detail-header h1 {
        margin: 0.75rem 0 0;
        font-size: 2rem;
      }

      .detail-card {
        background: white;
        border-radius: 12px;
        padding: 1.75rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      }

      .detail-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        border-bottom: 1px solid #e5e7eb;
      }

      .detail-row:last-child {
        border-bottom: none;
      }

      .detail-row label {
        font-weight: 600;
        color: #4b5563;
      }

      .detail-row span {
        color: #111827;
      }

      .highlight {
        font-weight: 700;
        color: #059669;
        font-size: 1.1rem;
      }

      .status-badge {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 999px;
        font-weight: 600;
        font-size: 0.9rem;
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

      .not-found {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        color: #6b7280;
      }

      .not-found p {
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }

      .primary-button {
        display: inline-block;
        padding: 0.85rem 1.5rem;
        border-radius: 999px;
        background: #4f46e5;
        color: white;
        text-decoration: none;
        font-weight: 600;
        transition: background 0.2s ease;
      }

      .primary-button:hover {
        background: #4338ca;
      }
    `
  ]
})
export class OrderDetailComponent implements OnInit {
  order: Order | null = null;

  private readonly orders: Order[] = [
    { id: 1057, customer: 'Alicia Myers', date: '2024-04-12', total: 249.99, status: 1 },
    { id: 1061, customer: 'Brian Johnson', date: '2024-04-14', total: 89.5, status: 2 },
    { id: 1065, customer: 'Carla Spencer', date: '2024-04-15', total: 398.0, status: 3 },
    { id: 1072, customer: 'Derek Watson', date: '2024-04-16', total: 149.75, status: 1 },
    { id: 1080, customer: 'Emily Hart', date: '2024-04-17', total: 56.23, status: 4 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = parseInt(params['id'], 10);
      this.order = this.orders.find((o) => o.id === id) || null;
    });
  }
}
