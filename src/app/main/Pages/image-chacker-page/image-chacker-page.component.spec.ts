import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageChackerPageComponent } from './image-chacker-page.component';

describe('ImageChackerPageComponent', () => {
  let component: ImageChackerPageComponent;
  let fixture: ComponentFixture<ImageChackerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageChackerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageChackerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
