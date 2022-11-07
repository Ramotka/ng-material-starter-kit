import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    number: new FormControl(),
    phone: new FormControl(),
    zipCode: new FormControl()
  });

  constructor(private _usersService: UsersService) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._usersService.create({
      email: registerForm.get('email')?.value,
      username: registerForm.get('username')?.value,
      password: registerForm.get('password')?.value,
      firstName: registerForm.get('firstName')?.value,
      lastName: registerForm.get('lastName')?.value,
      city: registerForm.get('city')?.value,
      street: registerForm.get('street')?.value,
      number: registerForm.get('number')?.value,
      phone: registerForm.get('phone')?.value,
      zipCode: registerForm.get('zipCode')?.value,
    }).subscribe();
  }
}
