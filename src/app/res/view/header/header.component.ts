import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu = [
    {linkName: 'Articles'},
    {linkName: 'Events'},
    {linkName: 'Reports'},
    {linkName: 'Costumer Stories'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
