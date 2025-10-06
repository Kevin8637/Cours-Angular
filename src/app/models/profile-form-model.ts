import {FormArray, FormControl} from '@angular/forms';

export type ProfileFormModel = {
  name: FormControl<string>;
  age: FormControl<number>;
}

export type RegisterFormModel = {
  username: FormControl<string>;
  age: FormControl<number>;
  email: FormControl<string>;
  phone: FormControl<string>;
}

export type ShippingFormModel = {
  addresses: FormArray<FormControl<string>>;
}
