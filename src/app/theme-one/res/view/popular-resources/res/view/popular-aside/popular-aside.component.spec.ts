import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAsideComponent } from './popular-aside.component';

describe('PopularAsideComponent', () => {
  let component: PopularAsideComponent;
  let fixture: ComponentFixture<PopularAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
