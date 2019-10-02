import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRedComponent } from './table-red.component';

describe('TableRedComponent', () => {
  let component: TableRedComponent;
  let fixture: ComponentFixture<TableRedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
