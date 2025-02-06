import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { Component } from '@angular/core';
import { ControlValueAccessor, NgForm, NgModel, Validators } from '@angular/forms';
import { NgxFormsHandleErrorsComponent } from './ngx-forms-handle-errors.component';

describe('NgxFormsHandleErrorsComponent', () => {
  let component: NgxFormsHandleErrorsComponent;
  let fixture: ComponentFixture<NgxFormsHandleErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  ],
      imports: [ NgxFormsHandleErrorsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormsHandleErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form when submitted', () => {
    const form = new NgForm([], []);
    component.save(form);
    expect(component.form).toBeTruthy();
  });

  it('should have errors when submitted', fakeAsync(() => {
    const form = new NgForm([], []);
    const inputUsername = new InputCustomMockComponent();
    const modelUsername = new NgModel(form, [ Validators.required ], [], [ inputUsername ]);

    modelUsername.name = 'username';
    modelUsername.control.setValue('Caue');
    form.addControl(modelUsername);

    tick(100);
    component.save(form);

    tick(1000);
    expect(component.form?.invalid).toBeTrue();
  }));

  it('should have `custom` error attribute', fakeAsync(() => {
    const form = new NgForm([], []);
    const inputUsername = new InputCustomMockComponent();
    const modelUsername = new NgModel(form, [ Validators.required ], [], [ inputUsername ]);

    modelUsername.name = 'username';
    modelUsername.control.setValue('Caue');
    form.addControl(modelUsername);

    tick(100);
    component.save(form);

    tick(1000);

    expect(modelUsername?.errors?.['custom']).toBeTruthy();
  }));
});

@Component({
    template: `<input name="username" [(ngModel)]="value"/>`,
})
class InputCustomMockComponent implements ControlValueAccessor {
  val = '';

  onChange: any = () => {
  };

  onTouch: any = () => {
  };

  get value(): string | null {
    return this.val;
  }

  set value(val) {
    if (val !== undefined && val !== null) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
