import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-listener',
  templateUrl: './new-listener.component.html',
  styleUrls: ['./new-listener.component.css']
})
export class NewListenerComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() linkText: string;
  @Input() btnText: string;
  @Input() theme: 'theme' | 'none' | 'padding';
  constructor() { }

  ngOnInit(): void {
  }

}
