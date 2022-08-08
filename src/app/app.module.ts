import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ConverttospacePipe } from './converttospace.pipe';
import { StarratingComponent } from './starrating/starrating.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { DummidataComponent } from './dummidata/dummidata.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConverttospacePipe,
    StarratingComponent,
    PagenotfoundComponent,
    HomeComponent,
    ProductdetailComponent,
    DummidataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'productlist',component:ProductListComponent},
      {path:'productslist/:id',component:ProductdetailComponent},
      {path:'productdetail',component:ProductdetailComponent},
     
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**', component:PagenotfoundComponent},
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
