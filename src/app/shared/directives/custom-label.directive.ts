import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  //
  // private properties
  //
  
  private _htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  //
  // lyfecicle methods
  //

  constructor(private el: ElementRef<HTMLElement>) {
    this._htmlElement = el;
  }

  //
  // Getters and Setters
  //

  @Input() 
  public set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input()
  public set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  //
  // private methods
  //

  private setStyle(): void {
    if (!this._htmlElement) return;

    this._htmlElement!.nativeElement.style.color = this._color;
  }

  private setErrorMessage(): void {
    if (!this._htmlElement) return;

    if (!this._errors) {
      this._htmlElement!.nativeElement.innerHTML = "No errors";
      return;
    }

    const errors = Object.keys(this._errors);
    
    if (errors.includes('required')) {
      this._htmlElement!.nativeElement.innerHTML = "This field is required";
      return;
    }

    if (errors.includes('minlength')) {
      const minLength = this._errors['minlength']['requiredLength'];
      const current = this._errors['minlength']['actualLength'];

      this._htmlElement!.nativeElement.innerHTML = `The min length is ${minLength} and the current is ${current}`;
      return;
    }

    if (errors.includes('email')) {
      this._htmlElement!.nativeElement.innerHTML = "The email is not valid";
      return;
    }
  }

}
