import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNAvComponent } from './social-nav.component';

describe('SocialNAvComponent', () => {
  let component: SocialNAvComponent;
  let fixture: ComponentFixture<SocialNAvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialNAvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialNAvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
