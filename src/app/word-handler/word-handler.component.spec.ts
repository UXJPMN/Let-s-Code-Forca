import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordHandlerComponent } from './word-handler.component';

describe('WordHandlerComponent', () => {
  let component: WordHandlerComponent;
  let fixture: ComponentFixture<WordHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
