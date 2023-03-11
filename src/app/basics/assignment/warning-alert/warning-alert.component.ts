import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: ` <h3>This is warning alert for you!</h3> `,
  styles: [
    `
      h3 {
        background: mistyrose;
        padding: 30px;
        margin: 10px auto;
        text-align: center;
        border: 1px solid red;
      }
    `,
  ],
})
export class WarningAlertComponent implements OnInit {
  ngOnInit(): void {}
}
