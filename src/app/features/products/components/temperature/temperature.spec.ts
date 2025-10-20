import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temparature } from './temperature';

describe('Temparature', () => {
  let component: Temparature;
  let fixture: ComponentFixture<Temparature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Temparature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Temparature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
