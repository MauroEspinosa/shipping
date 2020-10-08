import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from './admin-routing.module';

//---------------------------------Referente al usurio-------------------------------------------------------
//Servicios
import { SelectedStoreService } from './servicios/selected-store.service'
import { AuthService } from './servicios/auth.service'
import { UserInfoService } from './servicios/user-info.service'
import { OrdersService } from './servicios/orders.service';
import { UserOrdersService } from './servicios/user-orders.service';

//Componentes
import { AppComponent } from './componentes/app-component/app.component';
import { ColoredContainerComponent } from './componentes/colored-container/colored-container.component';
import { ImageHeaderComponent } from './componentes/image-header/image-header.component';
import { TextSliderComponent } from './componentes/text-slider/text-slider.component';
import { ActionButtonComponent } from './componentes/action-button/action-button.component';
import { ResultadosContainerComponent } from './componentes/resultados-container/resultados-container.component';
import { SearchStoreComponent } from './componentes/search-store/search-store.component';
import { LoginFormComponent } from './componentes/login-form/login-form.component';
import { SignupFormComponent } from './componentes/signup-form/signup-form.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BrandnameHeaderComponent } from './componentes/brandname-header/brandname-header.component';
import { AvalibleCardComponent } from './componentes/avalible-card/avalible-card.component';
import { OrderDetailsComponent } from './componentes/order-details/order-details.component';
import { JoinButtonComponent } from './componentes/join-button/join-button.component';
import { AddItemsFormComponent } from './componentes/add-items-form/add-items-form.component';
import { ProfileContainerComponent } from './componentes/profile-container/profile-container.component';
import { UserOrdersComponent } from './componentes/user-orders/user-orders.component';
import { UserInfoComponent } from './componentes/user-info/user-info.component';
import { PagosInfoComponent } from './componentes/pagos-info/pagos-info.component';
import { DireccionComponent } from './componentes/direccion/direccion.component';
import { UserInfoContainerComponent } from './componentes/user-info-container/user-info-container.component';
import { EditInfoComponent } from './componentes/edit-info/edit-info.component'
import { AddDirectionComponent } from './componentes/add-direction/add-direction.component';

//Pipes
import { TruncatePipe } from './shared/pipes/truncate-string'
import { SyncCLassPipe } from './shared/pipes/sync-class'
import { CapitalLetterPipe } from './shared/pipes/capital-letter-string'

//Guards
import { ExistingResults } from './shared/guards/existing-results-check'
import { ShowProfile } from './shared/guards/show-profile'


//--------------------------------Referente a la administracion-----------------------------
//Servicios
import { AuthAdminService } from './servicios/admin-services/auth-admin.service'
import { FinishedOrdersService } from './servicios/admin-services/finished-orders.service'
import { CompletedOrdersService } from './servicios/admin-services/completed-orders.service';
import { WaitingOrdersService } from './servicios/admin-services/waiting-orders.service';
import { SearchbarService } from './servicios/admin-services/searchbar.service'
import { ReceivedSubordersService } from './servicios/admin-services/received-suborders.service'
import { InterceptorsProvider } from './shared/interceptors/interceptors-provider'

//Componentes
import { LoginAdminComponent } from './admin-components/login-admin/login-admin.component'
import { BrandSloganComponent } from './admin-components/brand-slogan/brand-slogan.component'
import { MenuAdminComponent } from './admin-components/menu-admin/menu-admin.component';
import { AdminContainerComponent } from './admin-components/admin-container/admin-container.component';
import { ProbandingComponent } from './admin-components/probanding/probanding.component';
import { PendingOrdersComponent } from './admin-components/pending-orders/pending-orders.component';
import { PendingOrderDetailsComponent } from './admin-components/pending-order-details/pending-order-details.component';
import { AddTrackingComponent } from './admin-components/add-tracking/add-tracking.component';
import { TerminatedOrdersContainerComponent } from './admin-components/terminated-orders-container/terminated-orders-container.component';
import { OrdersOnWayComponent } from './admin-components/orders-on-way/orders-on-way.component';
import { IncomingSubordersComponent } from './admin-components/incoming-suborders/incoming-suborders.component'
import { ReceivedSubordersComponent } from './admin-components/received-suborders/received-suborders.component';
import { PromptComponent } from './admin-components/prompt/prompt.component';

//Guards
import { AdminRoleCheck } from './shared/guards/admin-role-check';

//Pipes
import { SearchbarPipe } from './shared/pipes/searchbar';


@NgModule({
  declarations: [
    AppComponent,
    ColoredContainerComponent,
    ImageHeaderComponent,
    TextSliderComponent,
    ActionButtonComponent,
    ResultadosContainerComponent,
    SearchStoreComponent,
    LoginFormComponent,
    SignupFormComponent,
    MenuComponent,
    BrandnameHeaderComponent,
    AvalibleCardComponent,
    OrderDetailsComponent,
    JoinButtonComponent,
    AddItemsFormComponent,
    ProfileContainerComponent,
    UserOrdersComponent,
    CapitalLetterPipe,
    UserInfoComponent,
    PagosInfoComponent,
    DireccionComponent,
    UserInfoContainerComponent,
    EditInfoComponent,
    AddDirectionComponent,
    LoginAdminComponent,
    AdminContainerComponent,
    BrandSloganComponent,
    MenuAdminComponent,
    ProbandingComponent,
    PendingOrdersComponent,
    PendingOrderDetailsComponent,
    AddTrackingComponent,
    TerminatedOrdersContainerComponent,
    OrdersOnWayComponent,
    SearchbarPipe,
    IncomingSubordersComponent,
    ReceivedSubordersComponent,
    PromptComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SelectedStoreService, AuthService, OrdersService, UserInfoService, UserOrdersService, ExistingResults, ShowProfile,
              AuthAdminService, AdminRoleCheck, FinishedOrdersService, CompletedOrdersService, WaitingOrdersService, SearchbarService, ReceivedSubordersService, InterceptorsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
