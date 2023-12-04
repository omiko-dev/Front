import { Component, Input } from '@angular/core';
import { ICard } from 'src/app/main/Interfaces/icard';

@Component({
  selector: 'app-navigation-card',
  template: `
    <section>
      <div class="box_1"></div>
      <div class="box_2"></div>
      <div class="box_3"></div>
      <div class="box_4"></div>
      <div class="box_5"></div>
      <div class="box_6"></div>
      <div class="box_7"></div>
      <div class="box_8"></div>

      <div class="card">
        <img [src]="Item.icon" />

        <h3>{{ Item.title }}</h3>

        <p>{{ Item.describe }}</p>

        <button [routerLink]="Item.goPath">
          <p>შესვლა</p>
          <div class="border"></div>
        </button>
      </div>
    </section>
  `,
  styleUrls: ['./navigation-card.component.scss'],
})
export class NavigationCardComponent {
  @Input() Item!: ICard;
}
