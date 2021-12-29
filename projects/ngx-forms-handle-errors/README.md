# NgxFormsHandleErrors

This module is going to bind the errors from an object to your form inputs.

[![npm](https://img.shields.io/npm/v/ngx-forms-handle-errors.svg)](https://www.npmjs.com/package/ngx-forms-handle-errors)

[Demo](https://ngx-forms-handle-errors.surge.sh/).

## Getting Started

Install with npm:

```
npm i ngx-forms-handle-errors
```

### Import and Use

```typescript
import { updateFormErrors } from 'ngx-forms-handle-errors';
```

```typescript
// Example of errors returned from an API
const errors = {
  "fields": {
    "username": [
      "Username has already been taken"
    ],
    "email": [
      "E-mail address already exists"
    ]
  }
}

export class AppComponent {
  item: any = {};

  async save(form: NgForm) {
    if (form.valid) {
      // Simulating API request
      setTimeout(() => {
        // Binding API returned errors
        updateFormErrors(form, errors);
      }, 2000);
    }
  }
}
```

```html
<form #form="ngForm" novalidate (submit)="save(form)">
  <div class="control">
    <input type="text" #username="ngModel" [(ngModel)]="item.username" name="username">
    <pre>{{ username?.errors?.custom }}</pre>
  </div>
  
  <div class="control">
    <input type="email" #email="ngModel" [(ngModel)]="item.email" name="email">
    <pre>{{ email?.errors?.custom }}</pre>
  </div>
</form>
```

Then, you'll have the following structure:

```javascript
{
  custom: "Username has already been taken"
}
```
