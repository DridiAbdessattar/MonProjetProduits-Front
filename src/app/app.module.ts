import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsService } from './produits.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailComponent } from './detail/detail.component';

const tableRoutage = [
{path: 'produits', component: ProduitsComponent},
{path: '', component: WelcomeComponent},
{path: 'welcome', component: WelcomeComponent},
{path: 'detail/:id', component: DetailComponent},
{path: '**', component: NotfoundComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    NotfoundComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(tableRoutage)
  ],
  providers: [ProduitsService], // declaration du service(singleton)
  bootstrap: [AppComponent]
})
export class AppModule { }
