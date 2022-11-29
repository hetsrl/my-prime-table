import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPrimeTableComponent } from './my-prime-table.component';

describe('MyPrimeTableComponent', () => {
  let component: MyPrimeTableComponent;
  let fixture: ComponentFixture<MyPrimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPrimeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPrimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
