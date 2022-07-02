import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuquedaComponent } from './buqueda.component';

describe('BuquedaComponent', () => {
  let component: BuquedaComponent;
  let fixture: ComponentFixture<BuquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuquedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
