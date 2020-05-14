import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-resources',
  templateUrl: './popular-resources.component.html',
  styleUrls: ['./popular-resources.component.css']
})
export class PopularResourcesComponent implements OnInit {
  post = [
    {
      category: 'Blog Post',
      title: 'Micro-influencers and B2C brand videos: A match made in heaven',
      btnText: 'Read Story'
    },
    {
      category: 'Webinar',
      title: 'Webinar: Improving content marketing through visual storytelling',
      btnText: 'Watch Webinar'
    },
    {
      category: 'Report',
      title: 'How to reach audiences with social video: From Millennials to Gen Z',
      btnText: 'Read Report'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
