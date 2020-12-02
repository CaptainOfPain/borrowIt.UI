import { CanActivate, Router } from "@angular/router";
import { CurrentUser } from "./current-user";
import { Injectable } from "@angular/core";

@Injectable()
export class CanActivateGuard implements CanActivate {
    constructor(private readonly _currentUser: CurrentUser, private readonly _router: Router) {

    }
    
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if (this._currentUser.isAuthenticated()) {
            return true;
        } else {
            this._router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }

    }
}