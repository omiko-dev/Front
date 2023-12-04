import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { IQuestions, IQuiz } from '../../Interfaces/Iquiz';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  constructor(private readonly data: DataService) {}

  quizData: any;

  test() {
    this.quizData = this.data.allQuize;
  }

  ngOnInit(): void {
    this.test();
  }

  quiz_images: string[] = [
    '../../../../assets/Images/ic_quiz_image1.jpeg',
    '../../../../assets/Images/quiz_bg2.png',
  ];
}
