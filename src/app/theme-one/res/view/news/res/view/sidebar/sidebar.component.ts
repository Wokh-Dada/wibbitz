import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() category: string;
  @Input() title: string;
  @Input() btnText: string;
  @Input() theme: 'Report' | 'Blog Post' | 'Webinar';
  constructor() { }

  ngOnInit(): void {
  }

}
