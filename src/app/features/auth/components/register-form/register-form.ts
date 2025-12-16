import {Component, inject} from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {RegisterFormModel} from '../../../../models/form-model';
import {RouterLink} from '@angular/router';
import {BaseApi} from '../../../../shared/services/base.api';

@Component({
  selector: 'app-register-form',
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss'
})

export class RegisterForm extends BaseApi{
  protected fb = inject(NonNullableFormBuilder);

  constructor() {
    super('http://localhost:8080/auth');
  }

  postRegister(data: any){
    console.log(data);
    const payload = {
      email: data.email,
      password: data.password
    }
    return this.post('/register', payload);
  }

  onSubmit(){
    const {email, password} = this.registerForm.value;
    this.postRegister({email, password});
  }

  registerForm: FormGroup<RegisterFormModel> = this.fb.group({
    // username: this.fb.control('', [Validators.minLength(3), Validators.required]),
    email: this.fb.control('', Validators.email),
    password: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{12,}$/)]),
    confirmPassword: this.fb.control('', [Validators.required ]),
    // phone: this.fb.control('+', Validators.pattern(/^\+\d{1,3}\s?\d{1,14}(\s?\d{1,4}){0,3}$/)),

  }, {validators: this.checkPasswords.bind(this)});

  checkPasswords(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { notSame: true };
  }

  // addresses = this.fb.array([
  //   this.fb.control('', [Validators.required]),
  // ]);
  //
  // addressesForm: FormGroup<AddressesFormModel> = this.fb.group({
  //   addresses: this.addresses,
  // })

}
