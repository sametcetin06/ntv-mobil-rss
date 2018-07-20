import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  post: any;

  constructor(public navParams: NavParams, private browser: InAppBrowser) {
    this.post = this.navParams.get('post');
  }

  goLink(){
    let a = this.browser.create(this.post.link,'_system');
  }

  openModal(){
    console.log("Open Modal");
  }
}
