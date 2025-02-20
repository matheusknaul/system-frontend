import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRedirectComponent } from './modal-redirect.component';

describe('ModalRedirectComponent', () => {
  let component: ModalRedirectComponent;
  let fixture: ComponentFixture<ModalRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRedirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
