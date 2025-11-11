import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit, AfterViewInit, OnDestroy{

  constructor() {
    console.log('Constructor Executed');
    //property initialization
  }

  ngOnInit(): void {
    console.log('Admin component initialized');
    // api call
    //subscription

  }

  ngAfterViewInit(): void {
    console.log('Admin component view initialized');
  }

  ngOnDestroy(): void {
    console.log('Admin component destroyed');
  }
}
