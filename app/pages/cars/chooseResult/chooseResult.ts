import {Page, NavController,NavParams} from 'ionic-angular';  
import {rentIt} from '../rentIt/rentIt';
import {Pay} from '../pay/pay';

@Page({
    templateUrl: 'build/pages/cars/chooseResult/chooseResult.html',
    styles: [`
	
    `]
})
export class chooseResult {  
	public option = {
		autoplay: 111
	}
	
	public coverages = [
		{
			name: "Loss Damage Waiver(LDW)",
			price: 22.00
		},
		{
			name: "Personal Accident Insurance(PAI)",
			price: 5.00
		},
		{
			name: "Additional Liability Insurance(ALI)",
			price: 3.50
		},
		{
			name: "Personal Effects Protection(PEP)",
			price: 10.00
		}
	];
	public cars = [
		{
		id:1,
		url: "build/img/cars/1.png",
		name:"Audi A5",
		nick:"Cabiolet",
		price:114.00,
		service: "GPS",
		transmistion: "Automatic"
		},
		{
		id:2,
		url: "build/img/cars/2.png",
		name:"JAOSn A5",
		nick:"asdas",
		price:12.00,
		service: "afdafsa",
		transmistion: "Automatic"
		},
		{
		id:3,
		url: "build/img/cars/3.png",
		name:"BWM A5",
		nick:"eadadt",
		price:331.00,
		service: "GPS",
		transmistion: "asdada"
		},
		{
		id:4,
		url: "build/img/cars/4.png",
		name:"adadsa A5",
		nick:"adasdaa",
		price:54.00,
		service: "dfgd",
		transmistion: "232das"
		},
		{
		id:5,
		url: "build/img/cars/5.png",
		name:"adad1 A5",
		nick:"fsf",
		price:114.00,
		service: "GPdShd",
		transmistion: "adasd"
		},
		{
		id:7,
		url: "build/img/cars/6.png",
		name:"aaaa A5",
		nick:"ss",
		price:114.00,
		service: "GPS",
		transmistion: "ssss"
		},
		{
		id:8,
		url: "build/img/cars/7.png",
		name:"fghjkl A5",
		nick:"jjj",
		price:114.00,
		service: "GPS",
		transmistion: "ffff"
		}
	];
	public days = null;
	public total; 
	public check = false;
    constructor(private _NavController: NavController, private navParams: NavParams) {
    	/*total*/
    	this.sumup();
    	if(navParams.get("days")){
    		// alert(navParams.get("days"));
    		this.days = navParams.get("days").toFixed(0);
    	}
    	if(navParams.get("id")){
    		console.log(navParams.get("id"))
    	}
    }
    sumup(){
    	let temp = [];
    	this.coverages.map((cover)=>{
    		temp.push(cover.price);
    	})
    	this.total = temp.reduce((a,b)=>{
    		return a+b
    	})
    	return this.total;
    	console.log(this.total);
    }
    onPageDidEnter(){
    	/*check*/
    	let checks = document.querySelectorAll(".info");
    	console.log(checks);
    	for (var i = 0; i < checks.length; i++) {
    		checks[i].addEventListener("touchstart", function(){
    			if(this.check){
	    			this.children[1].style.background = "";
    				this.check = false;
    			}else{
    				this.check = true;
	    			this.children[1].style.background = "black";
    			}
    		})
    	}
    }
    onSlideChanged(){
    	let  price = document.querySelector(".swiper-slide-active").querySelector(".carP").textContent;
    	price = parseInt(price);
	    console.log(price);
	    this.total = this.sumup() + price * this.days;
	    this.total = this.total.toFixed(2);
    }
    onPreserve(){
    	console.log("Preserve");
    	
    }
    onPay(){
    	console.log("pay");
    	this._NavController.push(Pay)
    	
    }
    back(){
    	this._NavController.pop();
    }
 	
}
