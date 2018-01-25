import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  username : string
  password : string

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     alert("Success.")
    }else {
      alert("Invalid credentials");
    }
  }
}
