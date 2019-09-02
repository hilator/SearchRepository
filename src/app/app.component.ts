import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import HttpClientModule from @angular/common/http in AppModule
import { HttpClientModule } from '@angular/common/http';
import { RequestOptions, Request, Headers } from '@angular/http'

export class clsOwnerModelData {
  id: number = 0;
  Name: string = "";
  Url: string = "";
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  apiValues: string[] = [];
  id: number = 0;
  Name: string = "";
  Url: string = "";


  public retPostData
  public retGetData
  public retGetSearchData: any[] = [];
  public owner: clsOwnerModelData;
  values = '';

  constructor(private http: HttpClient) {


  }
  //save SEARCH KEYWORD FOR API for get data
  onKey(event: any) { // without type info
    this.values = event.target.value;
  }
  ngOnInit() {
    this.owner = new clsOwnerModelData();
  }
  public PostData() {

    const url = "http://localhost:5000/api/values";
    const retVal = this.http.post(url, this.owner).subscribe(data => { this.retPostData = data; });
  }
  public GetData() {
    const url = "http://localhost:5000/api/values";
    this.http.get(url).subscribe(data => { this.retGetData = data; });
  }
  //Get data from api 
  public GetSearchData() {
    const url = "https://api.github.com/search/repositories?q=" + this.values;
    console.log(url)
    this.http.get(url).subscribe(data => { this.retGetSearchData = JSON.parse(JSON.stringify(data)); });


  }
  public GetChooseData(id, name, url) {
    //add to  object choose item and post to Web.api to save to session
    //
   
    
    console.log("****************", id, name, url);
    this.owner.id = id;
    this.owner.Name = name;
    this.owner.Url = url;
    const httpOptions = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': 'http://localhost:5000',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:5000')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE')
      .set('Access-Control-Max-Age', '3600')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Headers', 'Content-Type, authorization')
     
      .set('Content-Type', 'application/json');
   
   
    url = "http://localhost:5000/api/values";
    const httpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
   


    

    const retVal = this.http.post(url, this.owner, httpOptions).subscribe(data => { this.retPostData = data; });

    //const retVal = this.http.post(url, this.owner, { withCredentials: true }).subscribe(data => { this.retPostData = data; });

    var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];


    oldItems.push(this.owner);

    localStorage.setItem('itemsArray', JSON.stringify(oldItems));
    var consoletest = localStorage.getItem('itemsArray');
    console.log(consoletest)

  }
 


}
