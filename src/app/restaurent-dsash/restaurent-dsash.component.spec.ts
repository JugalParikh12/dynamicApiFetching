import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentDsashComponent } from './restaurent-dsash.component';

describe('RestaurentDsashComponent', () => {
  let component: RestaurentDsashComponent;
  let fixture: ComponentFixture<RestaurentDsashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurentDsashComponent]
    });
    fixture = TestBed.createComponent(RestaurentDsashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
