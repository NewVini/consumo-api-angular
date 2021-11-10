import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerReadComponent } from './costumer-read.component';

describe('CostumerReadComponent', () => {
  let component: CostumerReadComponent;
  let fixture: ComponentFixture<CostumerReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostumerReadComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
