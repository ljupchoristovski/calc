import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  calcFirst: number = 0;
  calcSecond: number = 0;
  total = 0;

  constructor(){}

  addNumbers(): any {
    this.total = this.calcFirst + this.calcSecond;
  }

  subNumbers(): any {
    this.total = this.calcFirst - this.calcSecond;
  }

  multiplyNumbers(): any {
    this.total = this.calcFirst * this.calcSecond;
  }

  divideNumbers(): any {
    this.total = this.calcFirst / this.calcSecond;
  }

  reset() {
    this.total = 0;
    this.calcFirst = 0;
    this.calcSecond = 0;
  }
}
