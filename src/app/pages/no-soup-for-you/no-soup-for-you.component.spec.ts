import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSoupForYouComponent } from './no-soup-for-you.component';

describe('NoSoupForYouComponent', () => {
  let component: NoSoupForYouComponent;
  let fixture: ComponentFixture<NoSoupForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSoupForYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoSoupForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
