import { Injectable } from "@angular/core";

@Injectable()
export class CurrentUser {
    public isAuthenticated(): boolean {
        let token = sessionStorage.getItem('jwtToken');
        return token != null && token.length > 0; 
    }
}