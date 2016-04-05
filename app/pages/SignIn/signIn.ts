import {Page, NavController} from 'ionic-angular';
import {Menu} from '../menu/menu';

@Page({
    templateUrl: 'build/pages/SignIn/signIn.html',
    styles: [`
		.padding{
			width:80%;
			margin: auto;
		}
		.logo{
	        margin:10em auto;
	        margin-bottom:0;
	        height:80px;
	        width:80px;
	        border:1px solid black;
    	}
		.username{
			width:80%;
			margin:auto;

		}
		.password{
			width:80%;
			margin:auto;

			border-bottom:1px solid rgba(200, 199, 204, 1)!important;
		}
  `]
})
export class SignIn {
    public foundRepos;
    public username;
    
    constructor(private _navController: NavController) {
    }
    goToMenu(){
    	 this._navController.push(Menu);
    }
}	