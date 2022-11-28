import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private keyToken: string = 'token';

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem(this.keyToken, token);
  }

  getToken(): string {
    return (localStorage.getItem(this.keyToken) || '{}');
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }
}
