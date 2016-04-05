import {Page, NavController} from 'ionic-angular';
import {Menu} from '../menu/menu';
import {Location} from './location/location';

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
			color:#3ebabe;
			height:70px;
			background:#171230!important;
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

  `]
})
export class rentIt {
	public pickUpLocaton = "Choose a pick-up location.."
	public returnLocaton = "Choose a return location.."
	public pickUpDate = "Choose a pick-ip date.."
	public returnDate = "Choose a return date.."
    
    constructor(private _navController: NavController) {
    }

    goToLocation(){
    	this._navController.push(Location)
    }

}	