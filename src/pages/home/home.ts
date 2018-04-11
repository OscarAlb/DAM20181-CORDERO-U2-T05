import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../services/user";
import { WelcomePage } from "../welcome/welcome";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: any = {
    curp: ''
  }
  
  constructor(public navCtrl: NavController,public userSrv:UserService) {
    this.userSrv.curp = "";
  }

  saveCurp():void{
      console.log("Todo bien");
      this.userSrv.curp=this.user.curp;
      this.navCtrl.push(WelcomePage);
  }

}
