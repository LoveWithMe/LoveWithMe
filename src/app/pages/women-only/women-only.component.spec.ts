import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenOnlyComponent } from './women-only.component';

describe('WomenOnlyComponent', () => {
  let component: WomenOnlyComponent;
  let fixture: ComponentFixture<WomenOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenOnlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
