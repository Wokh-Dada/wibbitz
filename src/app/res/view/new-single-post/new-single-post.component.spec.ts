import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSinglePostComponent } from './new-single-post.component';

describe('NewSinglePostComponent', () => {
  let component: NewSinglePostComponent;
  let fixture: ComponentFixture<NewSinglePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSinglePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
