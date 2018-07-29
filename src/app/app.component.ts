import { Component, OnInit } from '@angular/core';
import { AppService } from './Service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  toDoList: any[] = ['hello', 'world', 'just', 'checking', 'things', 'work'];
  footballList: any[] = [];

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.getFootballInfo();
  }

  getFootballInfo() {
    this.appService.getFootballInfo().subscribe((response: any) => this.footballList = response.standing);
  }
}
