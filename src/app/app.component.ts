import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentLoad = 'recipe'

  onNavigate(feature:string){
    this.currentLoad = feature;
  }

  title = 'CookBook-angular-project';
}
