import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchersComponent } from './watchers.component';

describe('WatchersComponent', () => {
  let component: WatchersComponent;
  let fixture: ComponentFixture<WatchersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchersComponent]
    });
    fixture = TestBed.createComponent(WatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
