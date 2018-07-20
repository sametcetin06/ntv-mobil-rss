import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
})
export class PostListPage {

  kategori;
  post;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
    this.kategori = this.navParams.get('kategori');
    this.service.anaSayfa(this.kategori.shrt).subscribe((r) => {
      this.post = r;
    })
  }
}
