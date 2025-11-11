import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  courseName: string = 'Angular';

  rollNo: number = 101;

  isAdmin: boolean = true;

  currentDate: Date = new Date();

  minTestLenagth = 5;

  spanClass: string = 'secondary';

  constructor() {
    console.log(this.courseName);

    this.courseName = 'Angular v20.2';
    console.log(this.courseName);

    this.courseName = '123';
    console.log(this.courseName);

    setTimeout(() => {
      this.rollNo = 202;
    },10);
    
  }

  // function creation
  showAlert() {
    alert('Button Clicked!');
  }

  cityChange() {
    alert('City Changed!');
  }

  onSizeChange() {
    alert('Size Changed!');
    console.log('window size changed');
    
  }

  onMouseEnter() {
    // alert('Mouse Entered!');
    console.log('mouse entered');
  }

  addTwoNumers(num1: number, num2: number): number {
    return num1 + num2;
  }

}
