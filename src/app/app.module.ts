import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { TestimonilsComponent } from './testimonils/testimonils.component';
import { TrendingComponent } from './trending/trending.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedComponent } from './featured/featured.component';
import { BlogComponent } from './blog/blog.component';
import { SecCarouselComponent } from './sec-carousel/sec-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderCarouselComponent,
    TestimonilsComponent,
    TrendingComponent,
    CategoriesComponent,
    FeaturedComponent,
    BlogComponent,
    SecCarouselComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
