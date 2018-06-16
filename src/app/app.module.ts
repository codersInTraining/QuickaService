import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {BookingPage} from '../pages/booking/booking';
import { DriverPage } from '../pages/driver/driver';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//geolocation
import {Geolocation} from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BookingPage,
    DriverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BookingPage,
    DriverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
