import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { MatToolbarModule }from '@angular/material/toolbar';
import { MatIconModule }from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule} from '@angular/material/sidenav'; 
import { MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'; 
import { AutoresView } from './views/autores/autores.view';
import { EditorialesView } from './views/editoriales/editoriales.view';
import { EstudiantesView } from './views/estudiantes/estudiantes.view';
import { LibrosView } from './views/libros/libros.view';
import { PrestamoView } from './views/prestamo/prestamo.view';
import { UsuariosView } from './views/usuarios/usuarios.view';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthService } from './services/auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NotFoundView } from './views/not-found/not-found.view';
import { ForbiddenView } from './views/forbidden/forbidden.view';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AutoresView,
    EditorialesView,
    EstudiantesView,
    LibrosView,
    PrestamoView,
    UsuariosView,
    LoginComponent,
    RegisterComponent,
    NotFoundView,
    ForbiddenView,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatToolbarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule

  ],
  providers: [AuthService, JwtHelperService,{provide:JWT_OPTIONS, useValue: JWT_OPTIONS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
