import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shared-data-with-service';

  constructor(private router: Router){}

  goToFirstComponent(): void{
    this.router.navigate(['component1']);
  }
  goToSecondComponent(): void{
    this.router.navigate(['component2']);
  }
  goToThirdComponent(): void{
    this.router.navigate(['component3']);
  }
}
