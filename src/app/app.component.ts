import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab-B';
  className: string = "";
  styleName = "";
  status: boolean = false;


  change(): void {
    this.className = "success";
  }

  reset(): void {
    this.className = "failure";
    this.styleName = "{color: 'red'}";
  }
}
