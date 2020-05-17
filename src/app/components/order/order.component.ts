import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import { Vegetables } from '../../class/vegetables';
import { Sauces } from '../../class/sauces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  form1 = new FormGroup({
    meat: new FormControl('lamb'),
  })
  form2 = new FormGroup({
    extras: new FormControl('fries')
  })
  tomato = new FormControl();
  lettuce = new FormControl();
  pickles = new FormControl();
  Onion = new FormControl();
 
  vegetables:Vegetables={
    theTomato:false,
    theLettuce:false,
    thePickles:false,
    theOnion:false
  };
  
  ketchup = new FormControl();
  mustard = new FormControl();
  ThousandIslands = new FormControl();
  sweetChilli = new FormControl();

  sauces:Sauces={
    ketchup:false,
    mustard:false,
    ThousandIsland:false,
    sweetChilli:false
  }
  typeOfMeat:string;
  typeOfExtras:string;
  constructor(private formBuilder:FormBuilder) { 

   }
   yourchoose(){
     this.typeOfMeat=this.form1.value.meat;
     localStorage.setItem('typeOfMeat', this.typeOfMeat);
     this.typeOfExtras=this.form2.value.extras;
     localStorage.setItem('typeOfExtras', this.typeOfExtras);
     this.vegetables.theTomato=this.tomato.value;
     this.vegetables.theLettuce=this.lettuce.value;
     this.vegetables.thePickles=this.pickles.value;
     this.vegetables.theOnion=this.Onion.value;
     localStorage.setItem('vegetables', JSON.stringify(this.vegetables));
     
     this.sauces.ketchup=this.ketchup.value;
     this.sauces.mustard=this.mustard.value;
     this.sauces.ThousandIsland=this.ThousandIslands.value;
     this.sauces.sweetChilli=this.sweetChilli.value;
     localStorage.setItem('sauces', JSON.stringify(this.sauces));
    }

  ngOnInit(): void {
  }

}
