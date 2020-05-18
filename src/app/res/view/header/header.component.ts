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
  themeComplite = false;
  getOnlythemeComplite() {
    return this.themeComplite;
  }
  toggleOnlyImportant() {
    this.themeComplite = !this.themeComplite;
  }
  toggleMobileMenu(){
    const x = document.getElementById('Mytopnav');
    if (x.className === 'topnav'){
      x.className += ' responsive';
    }else{
      x.className = 'topnav';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
