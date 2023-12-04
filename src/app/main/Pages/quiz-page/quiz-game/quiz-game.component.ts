import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.scss'],
})
export class QuizGameComponent {
  data: any;
  selectedAnswer1: number | null = null;
  selectedAnswer2: number | null = null;
  selectedAnswer3: number | null = null;
  selectedAnswer4: number | null = null;
  answerResults: { [key: number]: boolean } = {};
  checkArray: number[] = [];
  correctArray: number[] = [];
  finishCheck: number = 0;

  endCall: any;

  constructor(private route: ActivatedRoute, private service: DataService) {
    let id = this.route.snapshot.params['id'];
    this.data = service.allQuize.find((i) => i.Id == id)?.Quiz;
    this.endCall = service.nextGame;
    console.log(this.data);
  }

  onClick(answerId: number, questionId: number) {
    if (
      this.data[questionId].correctQuestionId === answerId &&
      !this.checkArray.includes(questionId) &&
      !this.correctArray.includes(questionId)
    ) {
      if (questionId == 0) {
        this.selectedAnswer1 = answerId;
        this.correctArray.push(questionId);
      }
      if (questionId == 1) {
        this.selectedAnswer2 = answerId;
        this.correctArray.push(questionId);
      }
      if (questionId == 2) {
        this.selectedAnswer3 = answerId;
        this.correctArray.push(questionId);
      }
      if (questionId == 3) {
        this.selectedAnswer4 = answerId;
        this.correctArray.push(questionId);
      }
    } else {
      if (questionId == 0) {
        this.selectedAnswer1 = null;
        this.checkArray.push(questionId);
      }
      if (questionId == 1) {
        this.selectedAnswer2 = null;
        this.checkArray.push(questionId);
      }
      if (questionId == 2) {
        this.selectedAnswer3 = null;
        this.checkArray.push(questionId);
      }
      if (questionId == 3) {
        this.selectedAnswer4 = null;
        this.checkArray.push(questionId);
      }
    }

    if (this.finishCheck != 4)
      this.finishCheck = this.checkArray.length + this.correctArray.length;
  }

  gifImagesURL = [
    '../../../../../assets/Images/quiz_0.gif',
    '../../../../../assets/Images/quiz_1.gif',
    '../../../../../assets/Images/quiz_2.gif',
    '../../../../../assets/Images/quiz_3.gif',
    '../../../../../assets/Images/quiz_4.gif',
  ];
}
