import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorizontalNavbarComponent } from './horizontal-navbar/horizontal-navbar.component';
import { VerticalNavbarComponent } from './vertical-navbar/vertical-navbar.component';
import { CheckInFormComponent } from './check-in-form/check-in-form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WeatherComponent } from './weather/weather.component';
import { VideoComponent } from './video/video.component';
import { CommentsComponent } from './comments/comments.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { TrendComponent } from './trend/trend.component';
import { HotelInformationComponent } from './hotel-information/hotel-information.component';
import { CheckInComponent } from './check-in/check-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalNavbarComponent,
    VerticalNavbarComponent,
    CheckInFormComponent,
    CalendarComponent,
    WeatherComponent,
    VideoComponent,
    CommentsComponent,
    RestaurantMenuComponent,
    TrendComponent,
    HotelInformationComponent,
    CheckInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
