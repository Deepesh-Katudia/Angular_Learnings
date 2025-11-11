import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './component/admin/admin';
import { User } from './component/user/user';
import { DataBinding } from "./data-binding/data-binding";
import { Signal } from './component/signal/signal';
import { ControlFlow } from './component/control-flow/control-flow';
import { Attribute } from "./component/attribute/attribute";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, User, DataBinding, Signal, ControlFlow, Attribute],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angluar_learning');
}
