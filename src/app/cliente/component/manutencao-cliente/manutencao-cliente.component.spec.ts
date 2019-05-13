import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoClienteComponent } from './manutencao-cliente.component';

describe('ManutencaoClienteComponent', () => {
  let component: ManutencaoClienteComponent;
  let fixture: ComponentFixture<ManutencaoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
