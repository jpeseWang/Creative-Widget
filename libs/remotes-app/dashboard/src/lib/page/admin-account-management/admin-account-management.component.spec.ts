import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountManagementComponent } from './admin-account-management.component';

describe('AdminAccountManagementComponent', () => {
  let component: AdminAccountManagementComponent;
  let fixture: ComponentFixture<AdminAccountManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAccountManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAccountManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
