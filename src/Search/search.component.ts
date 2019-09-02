import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'search',
  templateUrl: './search.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'search works!';
  //apiValues: string[] = [];
  //constructor(private _servise: Http) { }
  //ngOnInit() {
  //  this._servise.get("/api/values").subscribe(result => {
  //    this.apiValues = result.json() as string[];
  

  //  }) ;
  //}
}
