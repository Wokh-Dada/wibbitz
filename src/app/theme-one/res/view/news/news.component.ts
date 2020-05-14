import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  post = [
    {
      category: 'Report',
      title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
      btnText: 'Read Report'
    },
    {
      category: 'Blog Post',
      title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
      btnText: 'Read Report'
    },
    {
      category: 'Webinar',
      title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
      btnText: 'Read Report'
    },
    {
      category: 'Report',
      title: 'Explore Intagram Video: How to convert, engage, and get more Intagra...',
      btnText: 'Read Report'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
