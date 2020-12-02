import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlBuilderService } from 'app/shared/services/url-builder.service';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  private _subscription: PushSubscription;
  public operationName: string;

  constructor(private httpClient: HttpClient, private urlBuilderService: UrlBuilderService, private swPush: SwPush) { 
    swPush.subscription.subscribe((subscription) => {
      this._subscription = subscription;
      this.operationName = (this._subscription === null) ? 'Subscribe' : 'Unsubscribe';
    });    
  }

  public subscribe(): void {
    // Retrieve public VAPID key from the server
    this.httpClient.get(this.urlBuilderService.buildNotificationsUrl('PublicKey/'), { responseType: 'text' }).subscribe(publicKey => {
      // Request subscription with the service worker
      this.swPush.requestSubscription({
        serverPublicKey: publicKey
      })
      // Distribute subscription to the server
      .then(subscription => this.httpClient.post(this.urlBuilderService.buildNotificationsUrl('subscriptions/addSubscription'), subscription).subscribe(
        () => { },
        error => console.error(error)
      ))
      .catch(error => console.error(error));
    },
    error => console.error(error));
  };
}
