import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any; // am declarat o valoare care poate fi de orice tip
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  // api: facem GET in url-ul nostru cu getValues method (http request in Angular)
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
