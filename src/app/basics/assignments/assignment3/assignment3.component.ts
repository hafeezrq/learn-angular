import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component {
  toggle: boolean = true;
  clicks: any = [];

  toggleDisplay() {
    this.toggle = !this.toggle;
    this.clicks.push(this.clicks.length + 1);
    console.log(this.clicks);
  }
  // getColor(): any {
  //   return this.clicks.length >= 5 ? 'blue' : 'transparent';
  // }
}
