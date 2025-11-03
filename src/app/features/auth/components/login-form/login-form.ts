import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginFormModel} from '../../../../models/form-model';

@Component({
  selector: 'app-login-form',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm {
  protected fb = inject(NonNullableFormBuilder);

  loginForm: FormGroup<LoginFormModel> = this.fb.group({
    username: this.fb.control("", Validators.required),
    password: this.fb.control("", Validators.required)
  });
}
