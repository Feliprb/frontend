import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private storageService: StorageService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm): void {
    this.authService.login(form.value).subscribe(res => {
      if (res) {
        this.storageService.setToken(res.token);
        this.router.navigateByUrl('/libros');
      }
    });
  }
}
