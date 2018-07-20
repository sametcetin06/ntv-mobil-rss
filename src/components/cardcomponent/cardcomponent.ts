import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContentPage } from '../../pages/content/content';

@Component({
  selector: 'cardcomponent',
  templateUrl: 'cardcomponent.html'
})
export class CardcomponentComponent {

  @Input('post') post: string;

  constructor(private navCtrl: NavController) {

  }

  content(){
    this.navCtrl.push(ContentPage,{
      post: this.post
    });
  }
}
