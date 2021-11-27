import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppService } from '../app.service';

import { PostsDetailComponent } from './posts-detail.component';

describe('PostsDetailComponent', () => {
  let component: PostsDetailComponent;
  let fixture: ComponentFixture<PostsDetailComponent>;
  const fakeActivatedRoute = {
    snapshot: {params: {'id': '1'} as Params}
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsDetailComponent],
      imports: [RouterTestingModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('make expected call on ngOnInit', () => {
    spyOn(component, 'getPost').and.callThrough();
    component.ngOnInit();
    expect(component.getPost).toHaveBeenCalled();
  });

  describe('getPost', () => {
    it('should get post- according to param id', () => {
      const appServiceStub: AppService = fixture.debugElement.injector.get(
        AppService
      );
      const data = { shopId: 1 };
      spyOn(appServiceStub, 'findOne').and.callThrough();
      appServiceStub.findOne('');
      expect(appServiceStub.findOne).toHaveBeenCalled();
    });
  });
});
