import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidURLComponent } from './invalid-url.component';

describe('InvalidURLComponent', () => {
  let component: InvalidURLComponent;
  let fixture: ComponentFixture<InvalidURLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidURLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
