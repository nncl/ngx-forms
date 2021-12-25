import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-ngx-forms-handle-errors',
  template: `
    <form novalidate #form="ngForm">
      <div class="control">
        <input type="text" name="username" #username="ngModel" [(ngModel)]="item.username">
      </div>
      <div class="control">
        <input type="text" name="email" #email="ngModel" [(ngModel)]="item.email">
      </div>
    </form>
  `,
  styles: []
})
export class NgxFormsHandleErrorsComponent implements OnInit {
  form: NgForm | undefined;
  item: any = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  async save(form: NgForm) {
    this.form = form;
    if (form.invalid) {
      return;
    }
  }

}
