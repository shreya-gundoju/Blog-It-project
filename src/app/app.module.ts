import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';
import { AccountserviceService} from './account/accountservice.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ArticlesModule } from './articles/articles.module';
import { StaticpagesModule } from './staticpages/staticpages.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArticlesModule,
    StaticpagesModule,
    AccountModule,
    AppRoutingModule,
  ],
  providers: [ AccountserviceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
