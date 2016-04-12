import {Page, NavController,NavParams,Storage,LocalStorage} from 'ionic-angular';  
import {rentIt} from '../rentIt/rentIt';

@Page({
    templateUrl: 'build/pages/use/use.html',
    styles: [`
		
    `]
})
export class Use { 
	public car = {
		id:1,
		url: "build/img/cars/4.png",
		name:"Audi A5",
		nick:"Cabiolet",
		price:114.00,
		service: "GPS",
		transmistion: "Automatic"
	}
	public days = 34;
	public miles = 10;
	public returnLocation;
	public local;
	public pay = false;
    constructor(private _NavController: NavController, private _navParams : NavParams) {
    	 this.local = new Storage(LocalStorage);	
    	 if(_navParams.get('pay')==true){
    	 	this.pay = true;
    	 }	
    	 this.returnLocation = this.local.get("returnLocaton")._result;
    	 
    }

     goToRent() {
        this._NavController.push(rentIt);
    }
    back(){
    	this._NavController.pop();
    }
}
