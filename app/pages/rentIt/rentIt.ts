import {Page, NavController,NavParams,Storage,LocalStorage} from 'ionic-angular';
import {Menu} from '../menu/menu';
import {Location} from './location/location';
import {Location2} from './location/location2';
import {Date1} from './date/date1';
import {Date2} from './date/date2';
import {Cars} from '../cars/cars';
import {generalService} from '../../services/general.service';

@Page({
    templateUrl: 'build/pages/rentIt/rentIt.html',
    styles: [`
		.content{
			width: 100%;
			height:100%;
			background:#5f97f7;
			
		}
		.map{
			position:absolute;
			top:0;
			width:100%;
			height:22.3em;
			background:#c5c6c5;
		}
		.btns{
			position: absolute;
			bottom:0;
			width:100%;
		}
		.btn,.continue-btn{
			border-radius:0;
			margin:0;
			position:relative;
			height:60px;
		}
		.btn{
			padding-top:0.8em;
		}
		.btn:first-child{
			background: #636170!important;
		}
		.btn:nth-child(2){
			background: #545265!important;
		}
		.btn:nth-child(3){
			background: #413f52!important;
		}
		.btn:nth-child(4){
			background: #2a283d!important;
		}
		.continue-btn{
			color:#fff;
			height:70px;
			background:#171230!important;
		}
		.continueC{
			color:rgba(68, 197, 200, 1);
			animation: showup 1s 1 ease;
		}
		@keyframes showup{
			from{
				color:rgba(68, 197, 200, 0);
				font-size: 0.4em;
			}
			70%{
				color:rgba(68, 197, 200, 0.4);
				font-size: 1.2em;
			}

		}
		.card{
			height:75%!important;
			width:90%!important;
			border-radius:0;
			background:#a8a5ae;
			margin:auto;
			margin-top:0;
			position:relative;
			overflow: visible!important;
			line-height:2.3em;
			text-align:left;
			padding-left:1.3em;
		}
		.cardbg{
			background:transparent;
		}
		.wordColor{
			color:rgba(250, 250, 250, 0.66)!important;

		}
		.card::before{
			position:absolute !important;
			content:"  ";
			height:100%;
			width:3px;
			left:-0.4em;
			border-left: 0.15em solid #44c5c8;
		}
		span{
			color:rgb(77, 77, 91)!important;
		}
		.b{
			color:#44c5c8;
			display:inline;
		}

  `],
  providers:[generalService]
})
export class rentIt{
    public basicInfo;
    public local;
    public continue;
    constructor(private _navController: NavController, private _generalService: generalService,  private navParams: NavParams) {
    	this.local = new Storage(LocalStorage);
    	if(navParams.get('pickUpLocaton')){
    		this.local.set('pickUpLocaton', navParams.get('pickUpLocaton'));
    	}	
    	if(navParams.get('returnLocaton')){
    		this.local.set('returnLocaton', navParams.get('returnLocaton'));
    	}	
    	if(navParams.get('date1')){
    		this.local.set('pickUpDate', navParams.get('date1'));
    	}	
    	if(navParams.get('date2')){
    		this.local.set('returnDate', navParams.get('date2'));
    	}
    	this.basicInfo={
	    	pickUpLocaton : this.local.get("pickUpLocaton")._result,
	    	returnLocaton : this.local.get("returnLocaton")._result,
	    	pickUpDate : this.local.get("pickUpDate")._result,
	    	returnDate : this.local.get("returnDate")._result,
  	 	}
  	 	if(
  	 		this.basicInfo.pickUpLocaton &&
  	 		this.basicInfo.returnLocaton &&
  	 		this.basicInfo.pickUpDate &&
  	 		this.basicInfo.returnDate
  	 	){
  	 		this.continue  = true;
  	 	}else{
  	 		this.continue  = false;
  	 	}
    }

    goToLocation(){
    	this._navController.push(Location)
    }
    goToLocation2(){
    	this._navController.push(Location2)
    }
    goDate1(){
    	this._navController.push(Date1)
    }

    goDate2(){
    	this._navController.push(Date2)
    }
    onContinue(){
    	if(
    		this.basicInfo.pickUpLocaton &&
    		this.basicInfo.returnLocaton &&
    		this.basicInfo.pickUpDate &&
    		this.basicInfo.returnDate
    	){
    		this._navController.push(Cars)
    	}else{
    		console.log("something need to do ");
    		
    	}
    	
    }

}	