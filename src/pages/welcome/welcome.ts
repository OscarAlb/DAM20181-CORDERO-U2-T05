import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../services/user";


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  curp:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userSr:UserService) {
      this.curp=this.userSr.curp;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');  
  }

  atras(){
    this.navCtrl.push(HomePage);
    this.userSr.curp="";
  }

}
