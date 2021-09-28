import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';
import { RegModule } from './reg/reg.module';
import { BannerComponent } from './banner/banner.component';
import { CmsComponent } from './cms/cms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    BannerComponent,
    CmsComponent
  ],
  imports: [
    BrowserModule,
    RegModule,
    ProductsModule,

    AppRoutingModule,

  ],
  providers: [
    Title
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
