import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormsHandleErrorsComponent } from './ngx-forms-handle-errors.component';

describe('NgxFormsHandleErrorsComponent', () => {
  let component: NgxFormsHandleErrorsComponent;
  let fixture: ComponentFixture<NgxFormsHandleErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFormsHandleErrorsComponent ]
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
});
