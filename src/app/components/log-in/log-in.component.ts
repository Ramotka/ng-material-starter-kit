import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-log-in',
  styleUrls: ['./log-in.component.scss'],
  templateUrl: './log-in.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogInComponent {
  readonly logIn: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private _loginService: LoginService) {
  }

  onLogInSubmitted(logIn: FormGroup): void {
    this._loginService.logIn({
      username: logIn.get('username')?.value,
      password: logIn.get('password')?.value
    }).subscribe();
  }
}
