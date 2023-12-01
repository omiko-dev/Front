import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './main/Pages/home-page/home-page.component';
import { NavigationCardComponent } from './main/Pages/home-page/navigation-card/navigation-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomePageComponent,
    NavigationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
