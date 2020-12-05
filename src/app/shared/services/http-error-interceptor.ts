import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationsServiceService } from './notifications-service.service';
import { isDefined } from '@angular/compiler/src/util';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private readonly _notificationsService: NotificationsServiceService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = sessionStorage.getItem('jwtToken');
        if(isDefined(token) && token.length > 0){
            req = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${sessionStorage.getItem('jwtToken')}`
                }
              });
        }
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = `Error: ${error.error.message}`;
                    this._notificationsService.error(errorMessage);
                    return throwError(errorMessage);
                }));
    }
}