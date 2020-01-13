import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <p routerLink = "/card">
      button works! {{text}} 
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  @Input()  text: any;
  @Input() origin: string;
  constructor() { }

  ngOnInit() {



  }

}
