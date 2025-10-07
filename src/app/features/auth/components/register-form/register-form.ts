import {Component, inject} from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {AddressesFormModel, RegisterFormModel} from '../../../../models/form-model';
import {controls} from '@primeuix/themes/aura/picklist';
import {NgOptimizedImage} from '@angular/common';
import {IftaLabel} from 'primeng/iftalabel';
import {InputText} from 'primeng/inputtext';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss'
})

export class RegisterForm {
  protected fb = inject(NonNullableFormBuilder);

  registerForm: FormGroup<RegisterFormModel> = this.fb.group({
    username: this.fb.control('', [Validators.minLength(3), Validators.required]),
    email: this.fb.control('', Validators.email),
    password: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{12,}$/)]),
    confirmPassword: this.fb.control('', [Validators.required ]),
    phone: this.fb.control('+', Validators.pattern(/^\+\d{1,3}\s?\d{1,14}(\s?\d{1,4}){0,3}$/)),

  }, {validators: this.checkPasswords.bind(this)});

  checkPasswords(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { notSame: true };
  }

  addresses = this.fb.array([
    this.fb.control('', [Validators.required]),
  ]);

  addressesForm: FormGroup<AddressesFormModel> = this.fb.group({
    addresses: this.addresses,
  })

}
