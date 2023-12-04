export interface IQuiz {
  id: number;
  title: string;
  quiz: IQuestions;
}

export interface IQuestions {
  id: number;
  question: string;
  describe: string;
  answers: Map<number, string>;
  correct: number;
}
