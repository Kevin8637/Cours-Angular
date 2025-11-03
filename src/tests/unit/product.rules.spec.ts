import {Product} from '../../app/features/products/services/models/product.model';
import {ProductRules} from '../../app/features/products/domain/product.rules';

describe('ProductRules (unit tests)', () => {
  let product:Product;

  beforeEach(() => {
    product = {

      id : 1,
      name : 'Potion',
      price : 100,
      stock : 5,
      active : true,
      category: 'Beauté',
      description: 'jsp',
      imageUrl: 'https://placehold.it',
      rating: 3,
    };
  })

  it('should apply discount correctly', () => {
    const discounted = ProductRules.applyDiscount(product, 50);
    expect(discounted.price).toBe(50);
  })

  it('should throw error if discount < 0 or > 100', () => {
    expect(() => ProductRules.applyDiscount(product, -10)).toThrowError();
    expect(() => ProductRules.applyDiscount(product, 150)).toThrowError();
  })

  it('should return false if stock is 0', () =>{
    const result = ProductRules.canBeOrdered({...product, stock: 0});
    expect(result).toBeFalse();
  });

  it('should throw error if price<= 0', () =>{
    const invalid = {...product, price: 0};
    expect(() => ProductRules.validate(invalid)).toThrowError('Price must be greater than 0');
  })

  it('should throw error if stock < 0', () =>{
    const invalid = {...product, stock: -1};
    expect(() => ProductRules.validate(invalid)).toThrowError('Stock cannot be negative');
  })
})
