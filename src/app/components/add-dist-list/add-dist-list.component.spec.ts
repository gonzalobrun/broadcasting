import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistListComponent } from './add-dist-list.component';

describe('AddDistListComponent', () => {
  let component: AddDistListComponent;
  let fixture: ComponentFixture<AddDistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDistListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
