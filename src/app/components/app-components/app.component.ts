import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <toaster-container></toaster-container>
    <header-comp></header-comp>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <footer-comp></footer-comp>
  `
})

export class AppComponent { }