import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import {Geolocation } from '@ionic-native/geolocation';
import { GeolocationMarker } from 'geolocation-marker';


import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

declare var google: any;

import { ListPage } from '../list/list';
import { BookingPage } from '../booking/booking';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  circle:any;
  geolocation:Geolocation;
  //variable to store the longitude and latitude values 
  latitude:number;
  longitude:number;
  //variable to mark the location of the user 
  marker:any;
  constructor(public navCtrl: NavController) {
   
  }
  ionViewDidLoad() {
   
    this.loadMap();
    
  }
  loadMap(){
    
    //getting the current position 
    let locationOptions = {timeout: 2000, enableHighAccuracy: true};
 
    navigator.geolocation.getCurrentPosition(
 
        (position) => {
 
            let options = {
              center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP,     
            }
            this.map = new google.maps.Map(this.mapElement.nativeElement, options);
      this.latitude=position.coords.latitude;
      this.longitude=position.coords.longitude;

      //marking the current position 
     
       this.marker = new google.maps.Marker({
      map: this.map,
      draggable:true,
     
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(this.latitude, this.longitude)
      });
              
        },

        
 
        (error) => {
            console.log(error);
        }, locationOptions
    );

    

  
  }

 

 goToBooking(){
   alert(this.marker.position);
   this.navCtrl.push(BookingPage);

 }
 
}
