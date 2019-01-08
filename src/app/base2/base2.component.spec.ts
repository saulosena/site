import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base2Component } from './base2.component';

describe('Base2Component', () => {
  let component: Base2Component;
  let fixture: ComponentFixture<Base2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
