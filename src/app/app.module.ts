import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule }  from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContentPage } from '../pages/content/content';
import { ContactPage } from '../pages/contact/contact';
import { PostListPage } from '../pages/post-list/post-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { CardcomponentComponent } from '../components/cardcomponent/cardcomponent';
import { KategorilerComponent } from '../components/kategoriler/kategoriler';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    ContactPage,
    TabsPage,
    ContentPage,
    PostListPage,
    CardcomponentComponent,
    KategorilerComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ""
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    ContactPage,
    TabsPage,
    ContentPage,
    PostListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    InAppBrowser,
    ThemeableBrowser
  ]
})
export class AppModule {}
