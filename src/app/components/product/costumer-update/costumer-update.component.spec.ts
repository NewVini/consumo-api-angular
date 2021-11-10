import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerUpdateComponent } from './costumer-update.component';

describe('CostumerUpdateComponent', () => {
  let component: CostumerUpdateComponent;
  let fixture: ComponentFixture<CostumerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostumerUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
