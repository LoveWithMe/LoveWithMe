import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchQuestionnaireComponent } from './match-questionnaire.component';

describe('MatchQuestionnaireComponent', () => {
  let component: MatchQuestionnaireComponent;
  let fixture: ComponentFixture<MatchQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
