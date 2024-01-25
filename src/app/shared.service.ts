import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _counter: BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() { }

  get counter(): BehaviorSubject<number>{
    return this._counter;
  }

  set counter(value: number){
    this._counter.next(value);
  }
}
