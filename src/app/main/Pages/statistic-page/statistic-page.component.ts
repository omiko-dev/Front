import { Component } from '@angular/core';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss'],
})
export class StatisticPageComponent {
  mediaStatistic = [
    {
      name: 'palitraNews.ge',
      rating: 3.4,
    },
    {
      name: 'Ambebi.ge',
      rating: 4.2,
    },
    {
      name: 'Tabula.ge',
      rating: 3.2,
    },
    {
      name: 'On.ge',
      rating: 3.0,
    },
    {
      name: 'amerikiskhma.com',
      rating: 4.2,
    },
  ];
}
