import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {

  public buildUrl(path: string): string {
    return environment.baseApiUrl + path;
  }

  public buildNotificationsUrl(path: string): string {
    return environment.baseNotificationsApiUrl + path;
  }

  constructor() { }
}
