import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' project hello-world';
  getName() {
    alert("you have clicked");
  };

  obj={
    name: "Ayushi",
    age:12
  }

  arr = ["ayu", "shar", "min"];
}
