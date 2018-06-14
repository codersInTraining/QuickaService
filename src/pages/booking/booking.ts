import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { booking } from '../../models/booking.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//to convert lat long to name
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

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
  pickLocation:any;

  constructor(private nativeGeocoder: NativeGeocoder,public formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    
    //form validatiopickLocationn
    this.bookingForm = formBuilder.group({
      company: ['', Validators.required],
      vehNo: ['', Validators.required],
      serviceType: ['', Validators.required],
      pickLocation: ['', Validators.required],
      time: ['', Validators.required],
     date: ['', Validators.required], 
    });

     
   
     
  }

  ionViewDidEnter(){
    //to get the picked location from the home page
    this.pickLocation = this.navParams.get('locationPicked');
   this.bookingInfo.pickLocation=this.pickLocation;
//to display the location name
// this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
// .then((result: NativeGeocoderReverseResult) => alert(JSON.stringify(result)))
// .catch((error: any) => alert(error));
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad BookingPage');
  }

  makeBooking(){
    alert("Done Booking")
  }
}
