import {Component, inject} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProfileFormModel, RegisterFormModel} from '../../../../models/profile-form-model';
import {AdressForm} from '../adress-form/adress-form';

@Component({
  selector: 'app-profile-form.page',
  imports: [ReactiveFormsModule, AdressForm],
  templateUrl: './profile-form.page.html',
  styleUrl: './profile-form.page.scss'
})
export default class ProfileFormPage {
  private fb = inject(NonNullableFormBuilder);

  profileForm: FormGroup<ProfileFormModel> = this.fb.group({
    name: this.fb.control('', Validators.required),
    age: this.fb.control(18, [Validators.min(0), Validators.max(25)]),
  });

  registerForm: FormGroup<RegisterFormModel> = this.fb.group({
    username: this.fb.control('', Validators.required),
    age: this.fb.control(0, [Validators.min(0), Validators.max(28)]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    phone: this.fb.control('', [Validators.required, Validators.pattern(/^0[0-9]{9}$/)]),
  });
}
