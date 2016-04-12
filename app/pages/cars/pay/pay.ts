import {Page, NavController} from 'ionic-angular';  
import {rentIt} from '../rentIt/rentIt';
import {Menu} from '../../menu/menu';

@Page({
    templateUrl: 'build/pages/cars/pay/pay.html',
    styles: [`
		.credit{
			height: 0px!important;
			opacity:0;
			padding:0;
		}
		.gift{
			height: 0px!important;
			opacity:0;
			padding:0;
		}
		::-webkit-input-placeholder {
		   color: #6e6e70;
		   font-size:1em;
		   letter-spacing: 0.6;
		}

		:-moz-placeholder { /* Firefox 18- */
		   color: #6e6e70;
		   font-size:1em;
		   letter-spacing: 0.6;  
		}

		::-moz-placeholder {  /* Firefox 19+ */
		   color: #6e6e70;
		   font-size:1em;
		   letter-spacing: 0.6;  
		}

		:-ms-input-placeholder {  
		   color: #6e6e70;
		   font-size:1em;
		   letter-spacing: 0.6;  
		}
    `]
})
export class Pay { 
	public credit = true;
	public gift = true;
	public cards=[
		{url: "build/img/cars-47.jpg",number:"****323231", date: "10/2017", name: "Jason"},
		{url: "build/img/cars-48.jpg",number:"****937839", date: "18/2018", name: "Elaine"},
		{url: "build/img/cars-48.jpg",number:"****937839", date: "18/2018", name: "Elaine"},
		{url: "build/img/cars-48.jpg",number:"****937839", date: "18/2018", name: "Elaine"},
		{url: "build/img/cars-48.jpg",number:"****937839", date: "18/2018", name: "Elaine"},
		{url: "build/img/cars-48.jpg",number:"****937839", date: "18/2018", name: "Elaine"},
	]
	public myIcon;
    constructor(private _NavController: NavController) {
    	 this.myIcon = "logo-apple";
    	 
    	 setTimeout(()=>{
    		 let borders = document.querySelectorAll(".item-inner")
    		 console.log(borders);
    		 for (var i = 0; i < borders.length; i++) {
    		 	borders[i].style.border="none";
    		 }
    	 },100)
    }


    back(){
    	this._NavController.pop();
    }

    onPageDidEnter(){
    
    	
    }

    onCredit(){
    	if(this.credit){
    		this.credit = false;
    	}else{
    		this.credit = true;
    	}
    }
    onGift(){
    	if(this.gift){
    		this.gift = false;
    	}else{
    		this.gift = true;
    	}
    }
    pay(){
    	this._NavController.push(Menu, {pay: true});
    }
}
