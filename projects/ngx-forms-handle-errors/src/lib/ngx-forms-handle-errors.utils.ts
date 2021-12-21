import { NgForm } from '@angular/forms';

export interface NgxFormsError {
  fields: any;
}

export const updateFormErrors = (form: NgForm, errors: NgxFormsError) => {
  const { fields } = errors;
  if (fields) {
    for (const k in fields) {
      if (fields.hasOwnProperty(k) && form.controls[k]) {
        form.controls[k].setErrors({ custom: fields[k][0] });
      }
    }
  }
};
