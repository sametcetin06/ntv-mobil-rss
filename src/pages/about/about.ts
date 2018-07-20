import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  kategoriler: any = [
    {
      name: "Gündem",
      shrt: "gundem",
      icon: "md-paper"
    },
    {
      name: "Dünya Kupası 2018",
      shrt: "dunya-kupasi-2018",
      icon: "md-football"
    },
    {
      name: "Türkiye",
      shrt: "turkiye",
      icon: "md-globe"
    },
    {
      name: "Dünya",
      shrt: "dunya",
      icon: "md-planet"
    },
    {
      name: "Ekonomi",
      shrt: "ekonomi",
      icon: "md-podium"
    },
    {
      name: "Spor",
      shrt: "spor",
      icon: "md-basketball"
    },
    {
      name: "Teknoloji",
      shrt: "teknoloji",
      icon: "md-laptop"
    },
    {
      name: "Yaşam",
      shrt: "yasam",
      icon: "md-walk"
    },
    {
      name: "Eğitim",
      shrt: "egitim",
      icon: "md-book"
    },
    {
      name: "Sağlık",
      shrt: "saglik",
      icon: "md-pulse"
    },
    {
      name: "Sanat",
      shrt: "sanat",
      icon: "md-musical-note"
    },
    {
      name: "Seyahat",
      shrt: "seyahat",
      icon: "md-train"
    },
    {
      name: "Otomobil",
      shrt: "otomobil",
      icon: "md-car"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
