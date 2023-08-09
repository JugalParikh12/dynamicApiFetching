import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDynamicComponent } from './name-dynamic.component';

describe('NameDynamicComponent', () => {
  let component: NameDynamicComponent;
  let fixture: ComponentFixture<NameDynamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameDynamicComponent]
    });
    fixture = TestBed.createComponent(NameDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
