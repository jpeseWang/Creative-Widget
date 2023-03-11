import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenacePageComponent } from './maintenace-page.component';

describe('MaintenacePageComponent', () => {
  let component: MaintenacePageComponent;
  let fixture: ComponentFixture<MaintenacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaintenacePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
