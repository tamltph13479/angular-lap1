import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { DameComponent } from './dame/dame.component';
import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { UsersComponent } from './users/users.component';
import { ListComponent } from './users/list/list.component';
import { UserFormComponent } from './users/form/form.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { AboutClientComponent } from './about-client/about-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeClientComponent } from './home-client/home-client.component'
@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableComponent,
    TableAvatarComponent,
    NameComponent,
    IdentityComponent,
    DameComponent,
    FormComponent,
    ShowValidateComponent,
    UsersComponent,
    ListComponent,
    UserFormComponent,
    ProductClientComponent,
    AboutClientComponent,
    ProductDetailClientComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    HomeClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
