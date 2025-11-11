import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {


  studentList = [
    { name:'aaa', city:'New York', status:true },
    { name:'bbb', city:'Los Angeles', status:false },
    { name:'ccc', city:'Chicago', status:true },
    { name:'ddd', city:'Houston', status:false },
    { name:'eee', city:'Phoenix', status:true },
  ]

  themeClass: string = 'bg-success';

  textColor = "red";

  myCss: any = {
    'font-weight': 'bold',
    'font-size.px': 20,
    'font-style': 'italic'
  }

}
