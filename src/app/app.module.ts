import * as platformBrowser from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { RouterModule, Routes} from '@angular/router';
import { SesionstateService } from './servicios/sesionstate.service';
import { CookieService } from 'ngx-cookie-service';
import { BlogComponent} from './blog/blog.component';
import { TarjetaComponent } from './blog/tarjeta/tarjeta.component';
import { TarjetaService } from './servicios/tarjeta.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ValidarComponent } from './validar/validar.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CursosComponent } from './cursos/cursos.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { AngularResizedEventModule } from 'angular-resize-event';
import { HeaderComponent } from './header/header.component';


const rutas: Routes = [
{path: 'perfil', component: PerfilComponent, canActivate: [LoginGuard]},
{path: 'eventos', component: BlogComponent},
{path: 'cursos', component: CursosComponent},
{path: 'certificados', component: CertificadosComponent},
{path: 'solicitud', component: SolicitudComponent},
{path: 'login', component: LoginComponent}, 
{path: '', component: HomeComponent},
{path: 'validar', component: ValidarComponent},
{ path: '404', component: NotFoundComponent},
{ path: '**', redirectTo: '404' },



];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    BlogComponent,
    TarjetaComponent,
    NotFoundComponent,
    HomeComponent,
    ValidarComponent,
    ResultadosComponent,
    ContactoComponent,
    CursosComponent,
    CertificadosComponent,
    SolicitudComponent,
    HeaderComponent,
  ],
  imports: [
    platformBrowser.BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    AngularResizedEventModule,

    
  ],
  providers: [
    LoginGuard,
    SesionstateService,
    CookieService,
    LoginComponent,
    TarjetaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
