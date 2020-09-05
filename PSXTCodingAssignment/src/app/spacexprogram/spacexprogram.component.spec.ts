import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexprogramComponent } from './spacexprogram.component';

describe('SpacexprogramComponent', () => {
  let component: SpacexprogramComponent;
  let fixture: ComponentFixture<SpacexprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
