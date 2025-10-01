import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalery } from './image-galery';

describe('ImageGalery', () => {
  let component: ImageGalery;
  let fixture: ComponentFixture<ImageGalery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGalery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGalery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
