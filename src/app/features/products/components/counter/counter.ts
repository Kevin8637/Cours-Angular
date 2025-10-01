import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  count = 0;
  inputValue = "";

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  reset(){
    this.count = 0;
  }

  onKeyUp(event: KeyboardEvent){
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
