import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostListPage } from '../../pages/post-list/post-list';


@Component({
  selector: 'kategoriler',
  templateUrl: 'kategoriler.html'
})
export class KategorilerComponent {

  @Input('kategori') kategori;

  constructor(private navCtrl: NavController) {

  }

  buttonClick(){
    this.navCtrl.push(PostListPage,{
      kategori: this.kategori
    })
  }
}
