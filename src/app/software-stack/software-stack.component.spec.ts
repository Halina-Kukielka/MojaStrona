import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareStackComponent } from './software-stack.component';

describe('SoftwareStackComponent', () => {
  let component: SoftwareStackComponent;
  let fixture: ComponentFixture<SoftwareStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
