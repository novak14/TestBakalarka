import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export interface Model {
  jmeno: string;
  cislo: number;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  cislo;
  model: Model;
  myVar = false;

  constructor(private http: HttpClient) {
    this.getValues3();
  }

  getValues3() {
    console.log(this.model);
    return this.getValues2().subscribe(
      data => {
       // console.log(data);
        console.log(this.model);

        this.model = data;
        console.log(this.model);

        for (let i = 0; i < 2; i ++) {
          console.log(this.model[i].jmeno, this.model[i].cislo);
        }
      }
    );
  }

  // 'http://localhost:60620/api/values'
  // 'https://bpapi20180520104602.azurewebsites.net/api/values'
  // https://testtestapibakal.azurewebsites.net/api/values

  getValues2(): Observable<Model> {
    return this.http.get<Model>('https://bpapi20180520104602.azurewebsites.net/api/values', {responseType: 'json'});
  }

  getValues() {
    this.myVar = true;
    return this.http.get('https://bpapi20180520104602.azurewebsites.net/api/values/5', {responseType: 'text'}).subscribe(
      response => {
        console.log('Data: ' + response);
        this.cislo = response;
      }
    );
  }

  ngOnInit() {
  }

}
