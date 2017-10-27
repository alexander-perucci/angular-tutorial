import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventConsumerComponent } from './event-consumer.component';

describe('EventConsumerComponent', () => {
  let component: EventConsumerComponent;
  let fixture: ComponentFixture<EventConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
