import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSlotComponent } from './top-slot.component';

describe('TopSlotComponent', () => {
  let component: TopSlotComponent;
  let fixture: ComponentFixture<TopSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSlotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
