import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { booking } from '../../models/booking.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  bookingInfo ={} as booking;
  bookingForm: FormGroup;

  constructor(public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.bookingForm = formBuilder.group({

      company: ['', Validators.required],
      vehNo: ['', Validators.required],
      serviceType: ['', Validators.required],
      pickLocation: ['', Validators.required],
      time: ['', Validators.required],
     date: ['', Validators.required],
     
     
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

  makeBooking(){
    alert("Done Booking")
  }
}
