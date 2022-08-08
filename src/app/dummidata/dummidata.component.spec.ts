import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummidataComponent } from './dummidata.component';

describe('DummidataComponent', () => {
  let component: DummidataComponent;
  let fixture: ComponentFixture<DummidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummidataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
