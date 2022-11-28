import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { IsAdminGuard } from './components/guards/is-admin.guard';
import { IsAuthenticatedGuard } from './components/guards/is-authenticated.guard';
import { AutoresView } from './views/autores/autores.view';
import { EditorialesView } from './views/editoriales/editoriales.view';
import { EstudiantesView } from './views/estudiantes/estudiantes.view';
import { ForbiddenView } from './views/forbidden/forbidden.view';
import { LibrosView } from './views/libros/libros.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { PrestamoView } from './views/prestamo/prestamo.view';
import { UsuariosView } from './views/usuarios/usuarios.view';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}, 
  {
    canActivate:[ IsAuthenticatedGuard],
    path: 'libros',component:LibrosView},
  {
    canActivate:[ IsAuthenticatedGuard],
    path: 'prestamos', component:PrestamoView},
  {
    canActivate:[ IsAuthenticatedGuard],
    path: 'estudiantes', component:EstudiantesView},
  {
    canActivate:[ IsAuthenticatedGuard],
    path: 'autores', component:AutoresView},
  {
    canActivate:[ IsAuthenticatedGuard],
    path: 'editoriales', component:EditorialesView},
  { 
    canActivate:[IsAdminGuard],
    path: 'usuarios', component:UsuariosView
  },
  {path: 'not-found', component:NotFoundView},
  {path: 'forbidden', component:ForbiddenView},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
