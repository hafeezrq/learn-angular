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

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
