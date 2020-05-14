import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-two',
  templateUrl: './theme-two.component.html',
  styleUrls: ['./theme-two.component.css']
})
export class ThemeTwoComponent implements OnInit {
  newlistner = [
    {
      title: 'Recieve artictles like this in your mailbox',
      subtitle: 'Sign up to get weekly insights & inspiration in your inbox.',
      btnText: 'Subscribe'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
