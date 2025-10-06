import {Component, inject} from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ShippingFormModel} from '../../../../models/profile-form-model';

@Component({
  selector: 'app-adress-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './adress-form.html',
  styleUrl: './adress-form.scss'
})
export class AdressForm {
  protected fb = inject(NonNullableFormBuilder);

  addresses = this.fb.array([
    this.fb.control('', [Validators.required]),
  ])

  shippingForm: FormGroup<ShippingFormModel> = this.fb.group({
    addresses: this.addresses
  });
}
