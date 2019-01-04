import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
 
  source: LocalDataSource;
  settings = {
  mode: 'inline',

  columns: {
    name: {
      title: 'Teacher'
    },
    }
  };

public addColumn() {
     var i ;
     var n = parseInt((<HTMLInputElement>document.getElementById("myValue")).value);
     if (n>1)
     for(i=1;i<=n;i++)
     {
      this.settings.columns["Period" + i] = { title: 'Period ' + i.toString()};
      this.settings = Object.assign({}, this.settings);  
    }  
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
