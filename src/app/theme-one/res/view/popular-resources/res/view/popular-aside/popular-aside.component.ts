import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popular-aside',
  templateUrl: './popular-aside.component.html',
  styleUrls: ['./popular-aside.component.css']
})
export class PopularAsideComponent implements OnInit {
  @Input() category: string;
  @Input() title: string;
  @Input() btnText: string;
  @Input() theme: 'Report' | 'Blog Post' | 'Webinar';
  constructor() { }

  ngOnInit(): void {
  }

}
