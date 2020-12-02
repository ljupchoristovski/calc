import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

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

  public date: moment.Moment;
  public minDate: moment.Moment;
  public maxDate: moment.Moment;
  public color: ThemePalette = 'primary';
  public dateControl = new FormControl(moment());
  public dateControlMinMax = new FormControl(moment());

  constructor(){
    this.date = moment();
  }

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

  checkEmpty() {
    if(this.calcFirst === null) {
      this.calcFirst = 0;
    }

    if(this.calcSecond === null) {
      this.calcSecond = 0;
    }
  }
}
