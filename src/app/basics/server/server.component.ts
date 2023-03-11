import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverName: string = 'Server ONE';
  serverId: number = 10;
  serverStatus: string = 'Offline';

  getServerName() {
    return this.serverName;
  }
}
