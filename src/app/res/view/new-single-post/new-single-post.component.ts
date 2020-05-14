import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-single-post',
  templateUrl: './new-single-post.component.html',
  styleUrls: ['./new-single-post.component.css']
})
export class NewSinglePostComponent implements OnInit {

  @Input() category: string;
  @Input() title: string;
  @Input() btnText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
