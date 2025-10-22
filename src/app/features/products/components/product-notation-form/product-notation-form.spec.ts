import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNotationForm } from './product-notation-form';

describe('ProductNotationForm', () => {
  let component: ProductNotationForm;
  let fixture: ComponentFixture<ProductNotationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductNotationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNotationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
