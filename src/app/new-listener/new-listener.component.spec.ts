import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListenerComponent } from './new-listener.component';

describe('NewListenerComponent', () => {
  let component: NewListenerComponent;
  let fixture: ComponentFixture<NewListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
