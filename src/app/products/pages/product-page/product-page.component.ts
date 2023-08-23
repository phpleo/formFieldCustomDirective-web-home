import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  //
  // Private properties
  //

  /**
   * @description Similar to use in the consturctor: 'constrcutor(private formBuilder: FormBuilder) {}'
   */
  private formBuilder = inject(FormBuilder);

  //
  // Public properties
  //

  public color: string = 'green';

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]],
  });

  //
  // Public methods
  //

  public changeColor(): void {
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random()*16|0).toString(16));
    this.color = color;
  }

}
