import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  selectedCast: string = '';

  isStudentActive = signal<boolean>(true);

  changeStatus(booleanValue: boolean) {
    this.isStudentActive.set(booleanValue);
  }

  cityList : string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  studentList = [
    { name:'aaa', city:'New York', status:true },
    { name:'bbb', city:'Los Angeles', status:false },
    { name:'ccc', city:'Chicago', status:true },
    { name:'ddd', city:'Houston', status:false },
    { name:'eee', city:'Phoenix', status:true },
  ]

}
