import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFutureComponent } from './product-future.component';

describe('ProductFutureComponent', () => {
  let component: ProductFutureComponent;
  let fixture: ComponentFixture<ProductFutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
