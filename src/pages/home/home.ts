import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  post: any;

  constructor(public navCtrl: NavController, private service: ServiceProvider) {
    this.service.anaSayfa("gundem").subscribe((r)=>{
      this.post = r;
    })
  }

  doRefresh(value){
    this.service.anaSayfa("gundem").subscribe((r)=>{
      this.post = r;
      value.complete();
    })
  }
}
