import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-posts',
  templateUrl: './new-posts.component.html',
  styleUrls: ['./new-posts.component.css']
})
export class NewPostsComponent implements OnInit {
  post = [
    {category: 'Blog Post', title: '4 organic ways to improve your website KPIs', btnText: 'Read Report'},
    {category: 'Blog Post', title: 'How to turn your next event into a video content goldmine', btnText: 'Read Report'},
    {category: 'Blog Post', title: 'How to quickly turn ypur podcast into a video script', btnText: 'Read Report'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
