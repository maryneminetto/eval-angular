import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { ListeStatComponent } from './liste-stat/liste-stat.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { BordureAuSurvoleDirective } from './directives/bordure-au-survole.directive';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    ListeStatComponent,
    FormComponent,
    BordureAuSurvoleDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
