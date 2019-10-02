import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBlueComponent } from './table-blue.component';

describe('TableBlueComponent', () => {
  let component: TableBlueComponent;
  let fixture: ComponentFixture<TableBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
