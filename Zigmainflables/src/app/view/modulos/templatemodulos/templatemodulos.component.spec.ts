import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatemodulosComponent } from './templatemodulos.component';

describe('TemplatemodulosComponent', () => {
  let component: TemplatemodulosComponent;
  let fixture: ComponentFixture<TemplatemodulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatemodulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatemodulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
