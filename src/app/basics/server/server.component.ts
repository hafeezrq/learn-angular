import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css'],
  styles: [
    `
      .online {
        color: white;
      }
      p {
        padding: 10px;
      }
    `,
  ],
})
export class ServerComponent {
  serverName: string = 'Server ONE';
  serverId: number = 10;
  serverStatus: string = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerName() {
    return this.serverName;
  }

  getBackgroundColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
