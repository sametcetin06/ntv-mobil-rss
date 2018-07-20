import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceProvider {

  url: string = "https://ntvdeneme.herokuapp.com/";

  constructor(public http: Http) {

  }
  anaSayfa(kategori) {
    return this.http.get(this.url + kategori)
      .map((res: Response) => res.json())
  }
}
