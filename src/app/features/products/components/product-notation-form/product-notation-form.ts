import {Component, inject, input, output} from '@angular/core';
import {FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {NotationFormModel} from '../../../../models/form-model';
import {Review} from '../../../../models/product.model';

@Component({
  selector: 'app-product-notation-form',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './product-notation-form.html',
  styleUrl: './product-notation-form.scss'
})
export class ProductNotationForm {
  protected fb = inject(NonNullableFormBuilder);

  notationForm:FormGroup<NotationFormModel> = this.fb.group({
    rating: this.fb.control(0, [Validators.min(0), Validators.max(5), Validators.required]),
    comment: this.fb.control("", [Validators.maxLength(500)])
  })

  close = output<void>();
  submitNote = output<{rating: number; comment:string}>();

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if(this.notationForm.valid) {
      const { rating, comment } = this.notationForm.getRawValue();
      this.submitNote.emit( {rating, comment});
      this.onClose();
    }
  }
}
