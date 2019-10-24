import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGaleriaComponent } from './video-galeria.component';

describe('VideoGaleriaComponent', () => {
  let component: VideoGaleriaComponent;
  let fixture: ComponentFixture<VideoGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
