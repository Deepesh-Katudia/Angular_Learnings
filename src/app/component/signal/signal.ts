import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  // Normal variable
  courseName: string ='Angular Signals';

  // signal version
  angularVersion = signal("20.2")

  courseDuration = signal<string> ('5 Weeks');

  // array signal

  cityList= signal<string[]> (['Mumbai', 'Delhi', 'Bangalore']);

  addCity(cityName: string){
    this.cityList.update((old: string[]) => [...old, cityName]);
  }

  // signal object

  studentObj = signal<any> ({
    name: 'John Doe',
    age: 25,
    course: 'Angular',
    city: 'Mumbai'
  });

  changeCity(){
    this.studentObj.update((oldObj: any)=> ({
      ...oldObj,city: 'New York'
    }))

    this.studentObj.set({
      name: 'Deepesh Katudia',
      age: 26,})
  }

  changeDuration() {
    this.courseName = 'Angular Signals Updated';
    this.courseDuration.set('8 Weeks');
  }

}
