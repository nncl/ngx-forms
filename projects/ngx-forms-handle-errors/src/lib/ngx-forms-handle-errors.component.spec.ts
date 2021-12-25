import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormsHandleErrorsComponent } from './ngx-forms-handle-errors.component';
import { NgxFormsHandleErrorsModule } from './ngx-forms-handle-errors.module';
import { NgForm } from '@angular/forms';

describe('NgxFormsHandleErrorsComponent', () => {
  let component: NgxFormsHandleErrorsComponent;
  let fixture: ComponentFixture<NgxFormsHandleErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormsHandleErrorsComponent ],
      imports: [ NgxFormsHandleErrorsModule ]
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
});
