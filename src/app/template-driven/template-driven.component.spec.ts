import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenComponent } from './template-driven.component';

describe('FormularzComponent', () => {
  let component: TemplateDrivenComponent;
  let fixture: ComponentFixture<TemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
