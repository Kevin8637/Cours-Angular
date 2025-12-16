import {FormArray, FormControl} from '@angular/forms';

export type RegisterFormModel = {
  // username: FormControl<string>,
  email: FormControl<string>,
  password: FormControl<string>,
  confirmPassword: FormControl<string>,
  // phone: FormControl<string>,
}

// export type AddressesFormModel = {
//   addresses: FormArray<FormControl<string>>
// }

export type LoginFormModel = {
  username: FormControl<string>,
  password: FormControl<string>
}

export type NotationFormModel = {
  rating: FormControl<number>,
  comment: FormControl<string>
}
