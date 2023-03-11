import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowServerAdd = false;
  serverCreateStatus = 'Server not created yet!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowServerAdd = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onServerCreate() {
    this.serverCreateStatus = 'Server created successfully';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
