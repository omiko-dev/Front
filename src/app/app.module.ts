import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './main/Pages/home-page/home-page.component';
import { NavigationCardComponent } from './main/Pages/home-page/navigation-card/navigation-card.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { QuizPageComponent } from './main/Pages/quiz-page/quiz-page.component';
import { QuizGameComponent } from './main/Pages/quiz-page/quiz-game/quiz-game.component';
import { StatisticPageComponent } from './main/Pages/statistic-page/statistic-page.component';
import { ImageChackerPageComponent } from './main/Pages/image-chacker-page/image-chacker-page.component';
import { LoginPageComponent } from './main/Pages/login-page/login-page.component';
import { LogInComponent } from './main/Pages/login-page/log-in/log-in.component';
import { SignUpComponent } from './main/Pages/login-page/sign-up/sign-up.component';
import { ProfilePageComponent } from './main/Pages/profile-page/profile-page.component';
import { NewsPageComponent } from './main/Pages/news-page/news-page.component';
import { InfoPageComponent } from './main/Pages/info-page/info-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomePageComponent,
    NavigationCardComponent,
    QuizPageComponent,
    QuizGameComponent,
    StatisticPageComponent,
    ImageChackerPageComponent,
    LoginPageComponent,
    LogInComponent,
    SignUpComponent,
    ProfilePageComponent,
    NewsPageComponent,
    InfoPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
