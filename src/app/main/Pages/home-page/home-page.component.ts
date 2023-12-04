import { Component, Input } from '@angular/core';
import { ICard } from '../../Interfaces/icard';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  cardData: ICard[] = [
    {
      icon: '../../../../../assets//Images/ic_quiz.jpg',
      title: 'ქვიზი',
      describe: 'შეასრულე ქვიზები და გაიღრმავე ცოდნა მედია წიგნიერებაში',
      goPath: 'quiz',
    },
    {
      icon: '../../../../../assets//Images/ic_image_screen.jpg',
      title: 'ფოტო ტესტერი',
      describe: 'შეამოწმე დაედითებულია თუ არა ნებისმიერი სურათი',
      goPath: 'image-checker',
    },
    {
      icon: '../../../../../assets//Images/ic_statistic.jpg',
      title: 'სტატისტიკა',
      describe: 'ქართული საინფორმაციო ვებსაიტების სტატისტიკა და შეფასება',
      goPath: 'statistic',
    },
    {
      icon: '../../../../../assets//Images/ic_news.jpg',
      title: 'სიახლეები',
      describe: 'ცრუ ინფორმაციასთან ერთად ჩვენ გთავაზობთ სიმართლეს.',
      goPath: '',
    },
  ];

  LogoIconURL: String = '../../../../assets/Images/ic_logo.png';

  @Input()
  Item!: ICard;
}



