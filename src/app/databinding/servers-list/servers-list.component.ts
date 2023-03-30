import { Component } from '@angular/core';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.css'],
})
export class ServersListComponent {
  serverElements = [
    { type: 'server', name: 'testServer', content: 'Just a test server' },
  ];
}
