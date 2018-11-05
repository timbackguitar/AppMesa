import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionstateService } from './servicios/sesionstate.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private SesionstateService: SesionstateService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.SesionstateService.getEstado()=="notlogued"){
        this.router.navigate(['/']);
        return false;
      }
    else{
      
      return true;
        
    }
  }
}
