import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/userI';
import { JwtResponseI } from '../models/jwt-response';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private storageService: StorageService) { }

  register(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${environment.API}/register`, user)
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${environment.API}/login`, user)
  }

  logout(): void {
    this.storageService.deleteToken();
  }
}