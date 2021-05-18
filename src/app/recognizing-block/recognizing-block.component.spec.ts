import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizingBlockComponent } from './recognizing-block.component';

describe('RecognizingBlock', () => {
  let component: RecognizingBlockComponent;
  let fixture: ComponentFixture<RecognizingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecognizingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognizingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
