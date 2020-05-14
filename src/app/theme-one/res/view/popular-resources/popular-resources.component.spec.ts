import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularResourcesComponent } from './popular-resources.component';

describe('PopularResourcesComponent', () => {
  let component: PopularResourcesComponent;
  let fixture: ComponentFixture<PopularResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
