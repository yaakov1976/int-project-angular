import { Component, OnInit } from '@angular/core';
import { AddressOderObject } from '../../class/address-oder-object';
import { Vegetables } from '../../class/vegetables';
import { Sauces } from '../../class/sauces';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.css']
})
export class AcceptedComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }
  typeOfMeat:string = localStorage.getItem('typeOfMeat');
  typeOfExtras:string = localStorage.getItem('typeOfExtras');
  vegetables:Vegetables=JSON.parse(localStorage.getItem('vegetables'));
  sauces:Sauces=JSON.parse(localStorage.getItem('sauces'));
  showDetails:boolean=false;
  tomato:boolean= this.vegetables.theTomato;
  theLettuce:boolean= this.vegetables.theLettuce;
  thePickles:boolean= this.vegetables.thePickles;
  theOnion:boolean= this.vegetables.theOnion;
  ketchup:boolean=this.sauces.ketchup;
  mustard:boolean=this.sauces.mustard;
  ThousandIsland:boolean=this.sauces.ThousandIsland;
  sweetChilli:boolean=this.sauces.sweetChilli;
  address:AddressOderObject= JSON.parse(localStorage.getItem('address'));
  email:string= localStorage.getItem('email');
  name:string= localStorage.getItem('name');
  details(){
    this.showDetails= !this.showDetails;
  }
  logout(){
    this.auth.googleLogoout().then(res => {
      this.router.navigate(['login'])
    }).catch(err => console.log(err))
  }
  ngOnInit(): void {
  }

}
