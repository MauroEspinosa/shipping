import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColoredContainerComponent } from './componentes/colored-container/colored-container.component';
import { TextSliderComponent } from './componentes/text-slider/text-slider.component';
import { ResultadosContainerComponent } from './componentes/resultados-container/resultados-container.component';
import { SearchStoreComponent } from './componentes/search-store/search-store.component';
import { LoginFormComponent } from './componentes/login-form/login-form.component';
import { SignupFormComponent } from './componentes/signup-form/signup-form.component';
import { AvalibleCardComponent } from './componentes/avalible-card/avalible-card.component';
import { OrderDetailsComponent } from './componentes/order-details/order-details.component'
import { AddItemsFormComponent } from './componentes/add-items-form/add-items-form.component'
import { ProfileContainerComponent } from './componentes/profile-container/profile-container.component'
import { UserOrdersComponent } from './componentes/user-orders/user-orders.component'
import { UserInfoContainerComponent } from './componentes/user-info-container/user-info-container.component'
import { EditInfoComponent } from './componentes/edit-info/edit-info.component'
import { AddDirectionComponent } from './componentes/add-direction/add-direction.component'
import { ExistingResults } from './shared/guards/existing-results-check'
import { ShowProfile } from './shared/guards/show-profile'


const routes: Routes = [{path:"", component: ColoredContainerComponent, data:{animation:'inicio'},
                            children:[{path:"", component:TextSliderComponent},
                                      {path:"buscar", component: SearchStoreComponent, data:{animation:'buscar'}},
                                      {path:"login", component: LoginFormComponent,data:{animation:'login'}},
                                      {path:"signup", component: SignupFormComponent, data:{animation: 'signup'}}]},
                        {path:"resultados", component: ResultadosContainerComponent, canActivate:[ExistingResults], data:{animation: 'resultados'}, 
                            children:[{path:"", component: AvalibleCardComponent},
                                      {path:"order",component:OrderDetailsComponent, data:{animation:'orderDetails'}},
                                      {path: "join", component: AddItemsFormComponent, data:{animation:'addItems'}}]},
                        {path:"perfil", component: ProfileContainerComponent, data:{animation:'profile'},
                            children:[{path:"orders", component: UserOrdersComponent},
                                      {path:"info", component: UserInfoContainerComponent},
                                      {path:"edit-info", component: EditInfoComponent},
                                      {path:"add-direction", component: AddDirectionComponent},
                                      {path: "add-direction/:id", component: AddDirectionComponent}]}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
