import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFiltersComponent } from './manage-filters.component';

describe('ManageFiltersComponent', () => {
  let component: ManageFiltersComponent;
  let fixture: ComponentFixture<ManageFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
