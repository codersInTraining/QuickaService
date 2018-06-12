export interface driver{
    name:String
    licenseNo : string
    phoneNo : string
    // To show whether the driver is free or on the way to pick up or waiting for service to finish
    status : string
    location : string
}