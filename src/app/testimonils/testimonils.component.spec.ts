import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonilsComponent } from './testimonils.component';

describe('TestimonilsComponent', () => {
  let component: TestimonilsComponent;
  let fixture: ComponentFixture<TestimonilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
