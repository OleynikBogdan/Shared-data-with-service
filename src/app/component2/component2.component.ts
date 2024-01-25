import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.scss'
})
export class Component2Component {
  counter: BehaviorSubject<number> = this.service.counter;

  constructor(private service: SharedService){}

  increment(): void{
    let c = this.counter.value;
    c++;
    this.counter.next(c);
    this.service.counter = c;
  }

  dicrement(): void{
    let c = this.counter.value;
    c--;
    this.counter.next(c);
    this.service.counter =  c;
  }
}
