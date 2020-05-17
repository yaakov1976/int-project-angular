import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AddressService } from '../../services/address.service';
import { HttpClient } from "@angular/common/http"; 
import { City } from '../../class/city';
import { CommonService } from 'src/app/services/common.service';
import { StreetObject } from '../../class/street-object';
import { AddressOderObject } from '../../class/address-oder-object';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {
  constructor(private auth:AuthService, private router:Router, private address:AddressService,
    private httpClient: HttpClient,private commonService: CommonService ) { }
    mySelect:string = '2'; //gives a first value to the second option in the select of cites
    mySelectStreet:string = '2';//gives a first value to the second option in the select of streets
    selectedCity:string;
    selectedStreet:string;
    houseNumber:number;
  namesOfCites:City[];
  ifYouSelectedCity:boolean=false;
  ifYouSelectedStreet:boolean=false;
  nameOfStreets:StreetObject[];
  theStreets:StreetObject;
  newStreets:StreetObject[]=[];
  newName:string=localStorage.getItem('name');
  addressOfOder:AddressOderObject={
    city:'',
    street:'',
    houseNumber:0
  }; 
  selectChange() //this fun gets the value from the select option for cites
   {
    this.selectedCity = this.commonService.getDropDownText(this.mySelect, this.namesOfCites)[0].name;
    this.ifYouSelectedCity=true;
    this.getStreet();
  }

  selectChangeStreet() //this fun gets the value from the select option for streets
  {
    this.selectedStreet = this.commonService.getDropDownStreet(this.mySelectStreet, this.newStreets)[0].street_name;
    this.ifYouSelectedStreet=true;
  }
  getCity(){
    this.address.getTheCity().subscribe(cityData =>{
      this.namesOfCites=cityData;
    });
  }
  getStreet(){
    this.address.getTheStreet().subscribe(data =>{
      this.nameOfStreets=data;
      this.nameOfStreets.forEach( element =>{
        if(element.city_name==this.selectedCity){
          this.newStreets.push(element);
        }
      })
    })
  }
 saveAddressOfOder(houseNumber)//this fun storage the address info for the next component
 {
    this.houseNumber=houseNumber;
    this.addressOfOder.city=this.selectedCity;
    this.addressOfOder.street=this.selectedStreet;
    this.addressOfOder.houseNumber=this.houseNumber;
    localStorage.setItem('address', JSON.stringify(this.addressOfOder));
  }
  logout(){
    this.auth.googleLogoout().then(res => {
      this.router.navigate(['login'])
    }).catch(err => console.log(err))
  }
  ngOnInit(): void {
    this.getCity();
    
  }
  
}
