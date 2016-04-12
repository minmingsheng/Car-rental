import {Page, NavController} from 'ionic-angular';  
import {rentIt} from '../rentIt/rentIt';
import {Menu} from '../menu/menu';

@Page({
    templateUrl: 'build/pages/manage/manage.html',
    styles: [`
		.preservation{
			height: 0px!important;
			opacity:0;
			padding:0;
		}
		.onpaid, .onbad, .oncredit{
			height: 0px!important;
			opacity:0;
			padding:0;
		}
		p{
			margin:0;
			margin-top:0.5em;
			padding-left:1em;
		}
    `]
})
export class Manage { 
	public profile = {
		img: "build/img/portrait-77.png",
		username: "Minming Sheng",
		credit: 360,
		email: "min@gmail.com",
		phoneNumber: "902-210-3123",
	}
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
	public  sliderOptions: any = {
        effect: 'cube',
        noSwiping: true,
        direction: 'vertical'
    };
    public paid = [
    	{
    	id:5,
    	name: "Audi A5 2.0T",
    	url: "build/img/cars/5.png",
    	rLocation:"adad1 East Oakville",
    	pDate:"Feb 14",
    	rDate:"Mar 15",
    	total: 1931
    	},
    ]
    public credits = [
    	{
    		pLocation: "East-Oakville",
    		rLocation: "West-Oakville",
    		miles: "30",
    		credit: 150
    	},
    	{
    		pLocation: "Shanghai",
    		rLocation: "Canada",
    		miles: "1000",
    		credit: 150
    	}
    ]
	public num = this.cars.length;
	public preservation = true;
	public onpaid = true;
	public onbad = true;
	public oncredit = true;

	public gift = true;
	public cards=[
		{url: "build/img/cars-47.jpg",number:"****323231", date: "10/2017", name: "Jason"},
		{url: "build/img/cars-48.jpg",number:"****937839", date: "18/2018", name: "Elaine"},
		{url: "build/img/cars-48.jpg",number:"****937839", date: "18/2018", name: "Elaine"},
		{url: "build/img/cars-48.jpg",number:"****937839", date: "18/2018", name: "Elaine"},
		{url: "build/img/cars-48.jpg",number:"****937839", date: "18/2018", name: "Elaine"},
		{url: "build/img/cars-48.jpg",number:"****937839", date: "18/2018", name: "Elaine"},
	]
    constructor(private _NavController: NavController) {

    }


    back(){
    	this._NavController.pop();
    }

    onPageDidEnter(){
    
    	
    }

    onPreservation(){
    	if(this.preservation){
    		this.preservation = false;
    	}else{
    		this.preservation = true;
    	}
    }
    onPaid(){
    	if(this.onpaid){
    		this.onpaid = false;
    	}else{
    		this.onpaid = true;
    	}
    }
    onBad(){
    	if(this.onbad){
    		this.onbad = false;
    	}else{
    		this.onbad = true;
    	}
    }
    onCredit(){
    	if(this.oncredit){
    		this.oncredit = false;
    	}else{
    		this.oncredit = true;
    	}
    }

}
