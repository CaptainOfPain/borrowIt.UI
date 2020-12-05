import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login/login/services/login.service';
import { UserModel } from 'app/login/login/models/user.model';
import { UpdateUserRequestModel } from 'app/login/login/models/update-user.request.model';
import { NotificationsServiceService } from 'app/shared/services/notifications-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public user: UserModel;
  constructor(private readonly _loginService: LoginService, private readonly _notificationsService: NotificationsServiceService) { }

  ngOnInit() {
    this._loginService.getUser().subscribe(x => this.user = x);
  }

  public update(): void {
    this._loginService.updateProfile(
      new UpdateUserRequestModel(
        this.user.email, 
        this.user.birthDate, 
        this.user.firstName, 
        this.user.secondName, 
        this.user.city, 
        this.user.street, 
        this.user.postalCode)).subscribe(x => this._notificationsService.success("User updated successfully"));
  }

  public remove(): void {
    this._loginService.removeUser().subscribe(x => {
      this._loginService.logout();
      this._notificationsService.success("User removed successfully");
      location.href = "/"
    })
  }

}
