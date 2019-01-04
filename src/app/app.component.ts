import { Component, OnInit } from '@angular/core';
import *as firebase from 'firebase' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'temp';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBdJJl9PDo3cYKQi5_1fn5p7Z4myEuRijY",
      authDomain: "time-a3f5a.firebaseapp.com",
    });
  }
}
