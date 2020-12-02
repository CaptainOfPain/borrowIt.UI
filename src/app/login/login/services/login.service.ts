import { Injectable } from '@angular/core';
import { UrlBuilderService } from 'app/shared/services/url-builder.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLoggedModel } from '../models/user-logged.model';
import { RegisterUserRequestModel } from '../models/register-user.request.model';
import { isDefined } from '@angular/compiler/src/util';
import { NotificationsServiceService } from 'app/shared/services/notifications-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private readonly _urlBuilderService: UrlBuilderService, 
    private readonly _httpClient: HttpClient) { }

  public login(userName: string, password: string): Observable<UserLoggedModel> {
    return this._httpClient.post<UserLoggedModel>(this._urlBuilderService.buildUrl("auth/users/signIn"), {userName, password});
  }

  public saveUserInLocalStorage(user: UserLoggedModel) {
    sessionStorage.setItem("jwtToken", user.token);
    sessionStorage.setItem("username", user.userName);
    sessionStorage.setItem("id", user.id);
    sessionStorage.setItem("email", user.email);
  }

  public logout(): void {
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("email");
  }

  public register(request: RegisterUserRequestModel): Observable<void> {
    return this._httpClient.post<void>(this._urlBuilderService.buildUrl("auth/users"), request);
  }
}
