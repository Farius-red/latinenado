import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulateralmodulosComponent } from './menulateralmodulos.component';

describe('MenulateralmodulosComponent', () => {
  let component: MenulateralmodulosComponent;
  let fixture: ComponentFixture<MenulateralmodulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenulateralmodulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulateralmodulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
