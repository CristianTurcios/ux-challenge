import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckInFormComponent } from './check-in-form/check-in-form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WeatherComponent } from './weather/weather.component';
import { VideoComponent } from './video/video.component';
import { CommentsComponent } from './comments/comments.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { TrendComponent } from './trend/trend.component';
import { HotelInformationComponent } from './hotel-information/hotel-information.component';
import { LogInComponent } from './log-in/log-in.component';
import { SocialNAvComponent } from './social-nav/social-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckInFormComponent,
    CalendarComponent,
    WeatherComponent,
    VideoComponent,
    CommentsComponent,
    RestaurantMenuComponent,
    TrendComponent,
    HotelInformationComponent,
    LogInComponent,
    SocialNAvComponent,
    FooterComponent,
    ButtonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
