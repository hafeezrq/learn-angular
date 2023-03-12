import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowServerAdd = false;
  serverCreateStatus = 'Server not created yet!';
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowServerAdd = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onServerCreate() {
    this.serverCreated = true;
    this.serverCreateStatus =
      'Server ' + this.serverName + ' created successfully';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
