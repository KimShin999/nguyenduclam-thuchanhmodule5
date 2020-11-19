import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListbookComponent } from './listbook/listbook.component';
import { DetailbookComponent } from './detailbook/detailbook.component';
import { CreatbookComponent } from './creatbook/creatbook.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeletebookComponent } from './deletebook/deletebook.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbookComponent,
    DetailbookComponent,
    CreatbookComponent,
    DeletebookComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
