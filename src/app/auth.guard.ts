import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private  _authService: AuthService,private router: Router) {

  }
  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true;
    } else {
alert('login in first');
this.router.navigate(['/login'])
return false;
}
  }

  }
