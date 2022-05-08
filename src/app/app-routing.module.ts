// import { FeaturedComponent } from './featured/featured.component';
// import { TestimonilsComponent } from './testimonils/testimonils.component';
// import { BlogComponent } from './blog/blog.component';
// import { CategoriesComponent } from './categories/categories.component';
// import { TrendingComponent } from './trending/trending.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'all-new', component:NavbarComponent},
  // {path:'trending', component:TrendingComponent},
  // {path:'categories', component:CategoriesComponent},
  // {path:'featured', component:FeaturedComponent},
  // {path:'testimonials', component:TestimonilsComponent},
  // {path:'blog', component:BlogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// <li><a 	class="hover:text-indicatorprev " href="#all-new">All New</a></li>
// <li><a 	class="hover:text-indicatorprev" href="#trending">Trending</a></li>
// <li><a class="hover:text-indicatorprev" href="#categories">Categories</a></li>
// <li><a class="hover:text-indicatorprev" href="#featured">Featured</a></li>
// <li><a 	class="hover:text-indicatorprev" href="#testimonials">Testimonials</a></li>
// <li><a 	class="hover:text-indicatorprev" href="#blog">Blog</a></li>
