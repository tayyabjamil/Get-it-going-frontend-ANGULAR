import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) { }
title = "name";
projectData ;
  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.httpService.getProject().subscribe(data => {
  this.projectData = data;
    })
}
}
