import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-one',
  templateUrl: './theme-one.component.html',
  styleUrls: ['./theme-one.component.css']
})
export class ThemeOneComponent implements OnInit {
  newlistner = [
    {
      title: 'Ready to take a test drive?',
      subtitle: 'We`ll help you elevate strategy. Prices starting from $49 a month.',
      linkText: 'See pricing',
      btnText: 'Try it Free'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}



