import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) { }


  ngOnInit() {
    this.router.navigate(['/home']);
  }
  // cartNavigate(){
  //   this.router.navigate(['/cart']);
  // }
  homeNavigate() {
    this.router.navigate(['/home']);
  }

  // productNavigate(){
  //   this.router.navigate(['/cart']);
  // }

  
}
