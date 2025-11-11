# 🌟 Angular Learning Lab

A hands-on Angular repository where **each concept is represented by its own component**.  
This project is designed to help you **learn Angular step-by-step**, from fundamentals to advanced concepts — all inside one running app.

> Target: Angular 16+ (includes **Signals**, **new control flow syntax**, and modern best practices)

---

## 🚀 Quick Start

```bash
# 1. Install Angular CLI
npm install -g @angular/cli

# 2. Create or clone the repo
ng new angular-learning-lab --routing --style=scss
cd angular-learning-lab

# 3. Start the dev server
npm start
# or
ng serve
````

Open your browser at [http://localhost:4200](http://localhost:4200)

---

## 📁 Project Structure

```
src/
  app/
    core/             # Singleton services, interceptors, guards
    shared/           # Reusable UI, pipes, and directives
    lessons/          # Each Angular concept as a separate component
      components/
      pages/
      lessons-routing.module.ts
```

---

## 🧠 Lessons Overview

 | Component                     | Concept                                                               |
 | ----------------------------- | --------------------------------------------------------------------- |
 | ProjectStructurePageComponent | Angular workspace setup, modules, folder organization                 |
 | LifecycleDemoComponent        | Component creation, lifecycle hooks (`ngOnInit`, `ngOnChanges`, etc.) |
 | BindingEventsComponent        | Data binding, event handling, two-way binding with `ngModel`          |
 | SignalsDemoComponent          | `signal`, `computed`, and `effect` for state management               |
 | ControlFlowComponent          | New `@if`, `@for`, `@switch`, and `track` syntax                      |
 | AttributeDirectivesComponent  | `ngClass`, `ngStyle`, and custom directives                           |
 | RoutingBasicsPageComponent    | Routing, lazy loading, params, and navigation                         |
 | TemplateFormComponent         | Template-driven forms and validation                                  |
 | ReactiveFormComponent         | Reactive forms, `FormBuilder`, custom validators                      |
 | HttpCrudComponent             | CRUD operations with `HttpClient` and interceptors                    |
 | ServicesDemoComponent         | Dependency Injection, shared services                                 |
 | ResourceApiComponent          | API layer, DTO mapping, reusable service patterns                     |
 | PipesDemoComponent            | Built-in and custom pipes                                             |
 | LoginGuardPageComponent       | Route guards and protected routes                                     |
 | InterceptorDemoComponent      | Auth interceptors, global error handling                              |
 | InputOutputComponent          | Parent-child communication using `@Input` and `@Output`               |

---

## ⚙️ Generate Components Quickly

```bash
ng g c Component-Name

```

---

## 🧩 Example Routing Setup

`src/app/lessons/lessons-routing.module.ts`

```typescript
const routes: Routes = [
  { path: '', redirectTo: 'project-structure', pathMatch: 'full' },
  { path: 'project-structure', component: ProjectStructurePageComponent },
  { path: 'components-lifecycle', component: LifecycleDemoComponent },
  { path: 'binding-events', component: BindingEventsComponent },
  { path: 'signals', component: SignalsDemoComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: 'attribute-directives', component: AttributeDirectivesComponent },
  { path: 'routing', component: RoutingBasicsPageComponent },
  { path: 'template-forms', component: TemplateFormComponent },
  { path: 'reactive-forms', component: ReactiveFormComponent },
  { path: 'http-crud', component: HttpCrudComponent },
  { path: 'services', component: ServicesDemoComponent },
  { path: 'resource-api', component: ResourceApiComponent },
  { path: 'pipes', component: PipesDemoComponent },
  { path: 'login-guard', component: LoginGuardPageComponent },
  { path: 'interceptor', component: InterceptorDemoComponent },
  { path: 'input-output', component: InputOutputComponent },
];
```

---

## 🧱 Code Snippets

### Signals

```typescript
count = signal(0);
double = computed(() => this.count() * 2);

ngOnInit() {
  effect(() => console.log('count changed:', this.count()));
}

increment() {
  this.count.update(v => v + 1);
}
```

### Control Flow

```html
@for (user of users(); track user.id) {
  <app-user-card [user]="user"></app-user-card>
} @empty {
  <p>No users found</p>
}
```

### Reactive Form

```typescript
form = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(8)]],
});
```

### HTTP CRUD

```typescript
getTodos() {
  return this.http.get<Todo[]>('/api/todos').pipe(retry(1));
}
```

---

## 🧪 Suggested Exercises

* Add a **loading state** to `http-crud` using the `@defer` block
* Replace event bindings with **Signals** where possible
* Create a **custom validator** for password strength
* Add a **CanDeactivate guard** for unsaved form changes
* Implement a **repository pattern** in `resource-api`
* Add a **lazy-loaded Admin module** to practice routing

---

## 🧰 Useful Scripts

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "format": "prettier --write \"src/**/*.{ts,html,scss}\""
  }
}
```

---

## 🤝 Contributing

* Keep each concept in its own self-contained component
* Add comments or markdown blocks explaining key ideas
* Store reusable utilities in `/shared`
* Keep services stateless and inject with `providedIn: 'root'`

---

## 🪪 License

**MIT License** — free to use, learn, and modify.

---

### 🌱 Learn, Experiment, and Build

Each lesson in this project is designed for experimentation — tweak the code, break it, fix it, and learn how Angular works under the hood.
Happy coding! 🚀

```
