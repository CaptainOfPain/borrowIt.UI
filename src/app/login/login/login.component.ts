import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { RegisterUserRequestModel } from './models/register-user.request.model';
import { NotificationsServiceService } from 'app/shared/services/notifications-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLoginView: boolean = true;
  constructor(private readonly _loginService: LoginService, private readonly _router: Router,
    private readonly _notificationsService: NotificationsServiceService) { }

  ngOnInit(): void {
  }

  public login(userName: string, password: string): void {
    this._loginService.login(userName, password).subscribe(x => {
      if (x) { 
        this._loginService.saveUserInLocalStorage(x);
        this._notificationsService.success(`Logged in as ${sessionStorage.getItem('username')}`);
        this._router.navigate(['']);
      }
    } );
    ;
  }

  public register(userName: string, email: string, password: string,
     confirmPassword: string, birthDate: Date, firstName: string, lastName: string, city: string, street: string, postalCode: string) {
    this._loginService.register(new RegisterUserRequestModel(userName, email, password, confirmPassword, birthDate, firstName, lastName, city, street, postalCode)).subscribe();
    this.isLoginView = true;
  }

}
