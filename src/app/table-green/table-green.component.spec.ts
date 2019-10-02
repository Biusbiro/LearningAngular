import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGreenComponent } from './table-green.component';

describe('TableGreenComponent', () => {
  let component: TableGreenComponent;
  let fixture: ComponentFixture<TableGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
