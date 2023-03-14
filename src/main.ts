import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  constructor(){

    try{
      var parser, xmlDoc;
      var text =
        "<bookstore><book>" +
        "<title>Everyday Italian</title>" +
        "<author>Giada De Laurentiis</author>" +
        "<year>2005</year>" +
        "</book></bookstore>";

      parser = new DOMParser();
      xmlDoc = parser.parseFromString(text, "text/xml");

      document.getElementById("demo").innerHTML =
        xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    
    }catch(error){
      console.log('App class exception.');
    }finally{
      console.log('App class finally.');
    }

  } //end class

} // end class App

bootstrapApplication(App);
