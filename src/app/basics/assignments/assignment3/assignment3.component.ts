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
    this.clicks.push(new Date());
  }
}
