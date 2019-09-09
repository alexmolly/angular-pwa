import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesTecnologyComponent } from './articles-tecnology.component';

describe('ArticlesTecnologyComponent', () => {
  let component: ArticlesTecnologyComponent;
  let fixture: ComponentFixture<ArticlesTecnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesTecnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesTecnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
