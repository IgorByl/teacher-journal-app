import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsDashboardComponent } from './subjects-dashboard.component';

describe('SubjectsDashboardComponent', () => {
  let component: SubjectsDashboardComponent;
  let fixture: ComponentFixture<SubjectsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
