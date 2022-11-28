import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private storageService: StorageService) { }

  ngOnInit() {
  }

  onRegister(form: NgForm): void {
    console.log('form', form.value);
    this.authService.register(form.value).subscribe(res => {
      if (res) {
        this.storageService.setToken(res.token);
        this.router.navigateByUrl('/login');
      }else{
        alert('NO se pudo');
      }
    });
  }

}