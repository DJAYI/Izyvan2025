import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loginGroup should be invalid', () => {
    expect(component.loginGroup.valid).toBeFalsy();
  });

  it('username should be invalid', () => {
    expect(component.username.valid).toBeFalsy();
  });

  it('password should be invalid', () => {
    expect(component.password.valid).toBeFalsy();
  });

  it('should set username to "test"', () => {
    component.username.setValue('test');
    expect(component.username.value).toBe('test');
  });

  it('should set password to "test"', () => {
    component.password.setValue('test');
    expect(component.password.value).toBe('test');
  });

  it('loginGroup should be valid', () => {
    component.username.setValue('test');
    component.password.setValue('test');
    expect(component.loginGroup.valid).toBeTruthy();
  });

  it('should call onSubmit()', () => {
    spyOn(component, 'onSubmit');
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
