import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoModulosComponent } from './contenido-modulos.component';

describe('ContenidoModulosComponent', () => {
  let component: ContenidoModulosComponent;
  let fixture: ComponentFixture<ContenidoModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
