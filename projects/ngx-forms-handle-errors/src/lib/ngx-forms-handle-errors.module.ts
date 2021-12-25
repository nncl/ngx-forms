import { NgModule } from '@angular/core';
import { NgxFormsHandleErrorsComponent } from './ngx-forms-handle-errors.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgxFormsHandleErrorsComponent
  ],
    imports: [
        FormsModule
    ],
  exports: [
    NgxFormsHandleErrorsComponent
  ]
})
export class NgxFormsHandleErrorsModule { }
