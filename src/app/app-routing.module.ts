import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ControlComponent } from './components/control/control.component';
import { ImprimirComponent } from './components/imprimir/imprimir.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotComponent } from './components/page-not/page-not.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { RegistroTtComponent } from './components/registro-tt/registro-tt.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro-usuario', component:RegistroComponent},
  { path: 'consulta', component: ConsultaComponent},
  { path: 'control', component: ControlComponent},
  { path: 'registro-trabajos', component: RegistroTtComponent},
  { path: 'imprimir', component: ImprimirComponent},
  { path: 'imprimir/:id', component: ImprimirComponent},
  { path: 'recuperar', component: RecuperarComponent},
  { path: '**', component: PageNotComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
