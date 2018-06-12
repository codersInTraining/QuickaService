import { Time } from "@angular/common";
import { DateTime } from "ionic-angular";


export interface booking{
    name:String
    vehNo:String
    time:Time
    date:DateTime
    pickLocation:String
    serviceCenter:String
    serviceType:String
    
}