import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ERol } from 'src/app/models/rol.enum';
import { SessionService } from 'src/app/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private sessionService: SessionService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.sessionService.getRol() === ERol.ADMIN) {
      return true;
    }if (confirm("¿ Desea Iniciar sesión como administrador ?")) {
      //redirecion para nuevo logueo 
      this.router.navigateByUrl('/login');
      return false;
    }
    else {
      //redirecion para nuevo logueo 
      return false;
    }

  }

}
