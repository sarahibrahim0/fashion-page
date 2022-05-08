import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecCarouselComponent } from './sec-carousel.component';

describe('SecCarouselComponent', () => {
  let component: SecCarouselComponent;
  let fixture: ComponentFixture<SecCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
