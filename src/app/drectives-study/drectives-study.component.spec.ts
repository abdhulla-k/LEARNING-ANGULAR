import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrectivesStudyComponent } from './drectives-study.component';

describe('DrectivesStudyComponent', () => {
  let component: DrectivesStudyComponent;
  let fixture: ComponentFixture<DrectivesStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrectivesStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrectivesStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
