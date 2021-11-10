import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerCrudComponent } from './costumer-crud.component';

describe('CostumerCrudComponent', () => {
  let component: CostumerCrudComponent;
  let fixture: ComponentFixture<CostumerCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostumerCrudComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
