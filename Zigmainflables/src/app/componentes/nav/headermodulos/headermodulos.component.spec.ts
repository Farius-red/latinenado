import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadermodulosComponent } from './headermodulos.component';

describe('HeadermodulosComponent', () => {
  let component: HeadermodulosComponent;
  let fixture: ComponentFixture<HeadermodulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadermodulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadermodulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
