import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-home',
  template: `
    <section class="home-page">
      <h1>Welcome to the Order Tracking App</h1>
      <p>Use the navigation above to view current orders and delivery status.</p>
      <a routerLink="/orders" class="primary-button">View Orders</a>
    </section>
  `,
  styles: [
    `
      .home-page {
        text-align: center;
        max-width: 680px;
        margin: 0 auto;
      }

      .home-page h1 {
        margin-bottom: 1rem;
        font-size: clamp(2rem, 3vw, 3rem);
      }

      .home-page p {
        margin-bottom: 1.75rem;
        color: #4a4a4a;
        line-height: 1.7;
      }

      .primary-button {
        display: inline-block;
        padding: 0.85rem 1.5rem;
        border-radius: 999px;
        background: #4f46e5;
        color: white;
        text-decoration: none;
        font-weight: 600;
      }

      .primary-button:hover {
        background: #4338ca;
      }
    `
  ]
})
export class HomeComponent {}
