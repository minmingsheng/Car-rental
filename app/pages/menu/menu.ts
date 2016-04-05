import {Page, NavController} from 'ionic-angular';  
import {rentIt} from '../rentIt/rentIt';

@Page({
    templateUrl: 'build/pages/menu/menu.html',
    styles: [`
		.btn{
			border-radius:0;
			margin:0;
			border:1px solid #5db5ba;
			position:relative;
			height:80px;
		}
		.toolbar{
			height:700px!important;
		}
		.btns{
			position: absolute;
			bottom:0;
			width:100%;
		}
		.img{
			width:100%;
			height:22.3em;
			background:#5f97f7;
		}
	
    `]
})
export class Menu {  
	public myIcon;
    constructor(private _NavController: NavController) {
    	 this.myIcon = "logo-apple";
    }

     goToRent() {
        this._NavController.push(rentIt);
    }
}
