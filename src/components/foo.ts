import { NavController, NavParams } from 'ionic-angular';
import { Component } from "@angular/core";
import { UserService } from "../services/user";

@Component({
    selector:'my-component',
    templateUrl:'foo.html'
})



export class MyComponent{
    
    public data: any = {myToggle:true};
    
    curp:string;
    
    constructor(public navCtrl: NavController, public navParams: NavParams,public userSrv:UserService){
        this.curp=this.userSrv.curp
        
        if(this.curp.substring(10,11)=="H"){
            this.data.myToggle=true;}
        else{
            this.data.myToggle=false;
        }
    }

}