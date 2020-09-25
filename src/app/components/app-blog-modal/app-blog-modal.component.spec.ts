import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogModalComponent } from './app-blog-modal.component';

describe('AppBlogComponent', () => {
  let component: AppBlogModalComponent;
  let fixture: ComponentFixture<AppBlogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBlogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
