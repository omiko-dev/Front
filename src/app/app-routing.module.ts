import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './main/Pages/home-page/home-page.component';
import { QuizPageComponent } from './main/Pages/quiz-page/quiz-page.component';
import { QuizGameComponent } from './main/Pages/quiz-page/quiz-game/quiz-game.component';
import { StatisticPageComponent } from './main/Pages/statistic-page/statistic-page.component';
import { ImageChackerPageComponent } from './main/Pages/image-chacker-page/image-chacker-page.component';
import { LoginPageComponent } from './main/Pages/login-page/login-page.component';
import { ProfilePageComponent } from './main/Pages/profile-page/profile-page.component';
import { NewsPageComponent } from './main/Pages/news-page/news-page.component';
import { AuthGuard } from './guard/auth.guard';
import { InfoPageComponent } from './main/Pages/info-page/info-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },

  { path: 'quiz', component: QuizPageComponent },

  { path: 'quizgame/:id', component: QuizGameComponent },

  { path: 'statistic', component: StatisticPageComponent },

  { path: 'image-checker', component: ImageChackerPageComponent },

  { path: 'login', component: LoginPageComponent },

  { path: 'profile', component: ProfilePageComponent, canActivate:[AuthGuard] },

  { path: 'news', component: NewsPageComponent },

  { path: 'news/:id', component: InfoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
