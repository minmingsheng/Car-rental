import {Page, NavController} from 'ionic-angular';
import {Menu} from '../menu/menu';
import {SignIn} from '../SignIn/signIn';

@Page({
    templateUrl: 'build/pages/home/home.html',
    styles: [`
    .logo{
        margin:10em auto;
        margin-bottom:0;
        height:80px;
        width:80px;
        border:1px solid black;
    }
    .login-signup {
        margin:2em auto;
    }
    .sign-in{
        width:40%;
        margin-left:10%
    }
    .sign-up{
        width:40%;
    }
    .as-a-guest{
        width:82%;
        margin-left:10%
    }
  `]
})
export class HomePage {
    
    constructor(private _NavController: NavController) {
    }
    goToSignIn() {
        this._NavController.push(SignIn);
    }
    goToDetails() {
        this._NavController.push(Menu);
    }
}