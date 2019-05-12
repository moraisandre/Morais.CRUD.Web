import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPageComponent } from './clientes-page.component';

describe('ClientesPageComponent', () => {
  let component: ClientesPageComponent;
  let fixture: ComponentFixture<ClientesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
