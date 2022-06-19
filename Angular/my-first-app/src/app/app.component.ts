import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  styles: [`
      h1{
        color: orange
      }
      .app-products{
        background-color : blueviolet;
       color : #fff;
       font-size : 24px
      }
  `]
})
export class AppComponent {
  title = 'Angular 14';
}
