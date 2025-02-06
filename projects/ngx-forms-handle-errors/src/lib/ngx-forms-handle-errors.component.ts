import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { updateFormErrors } from './ngx-forms-handle-errors.utils';

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

@Component({
    selector: 'lib-ngx-forms-handle-errors',
    template: `
    <form novalidate #form="ngForm" (submit)="save(form)">
      <div class="control">
        <input type="text" name="username" #username="ngModel" [(ngModel)]="item.username" required>
      </div>
      <div class="control">
        <input type="text" name="email" #email="ngModel" [(ngModel)]="item.email" required>
      </div>
    </form>
  `,
    styles: [],
    imports: [FormsModule]
})
export class NgxFormsHandleErrorsComponent {
  form: NgForm | undefined;
  item: any = {};

  async save(form: NgForm) {
    this.form = form;

    if (this.form.invalid) {
      return;
    }

    setTimeout(() => {
      updateFormErrors(form, errors);
    }, 1000);
  }

}
