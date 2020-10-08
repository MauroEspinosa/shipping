import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoleCheck } from './shared/guards/admin-role-check'

import { AdminContainerComponent } from './admin-components/admin-container/admin-container.component'
import { LoginAdminComponent } from './admin-components/login-admin/login-admin.component'
import { BrandSloganComponent } from './admin-components/brand-slogan/brand-slogan.component'
import { MenuAdminComponent } from './admin-components/menu-admin/menu-admin.component';
import { ProbandingComponent } from './admin-components/probanding/probanding.component';
import { PendingOrdersComponent } from './admin-components/pending-orders/pending-orders.component';
import { PendingOrderDetailsComponent } from './admin-components/pending-order-details/pending-order-details.component';
import { AddTrackingComponent } from './admin-components/add-tracking/add-tracking.component';
import { TerminatedOrdersContainerComponent } from './admin-components/terminated-orders-container/terminated-orders-container.component';
import { OrdersOnWayComponent } from './admin-components/orders-on-way/orders-on-way.component';
import { IncomingSubordersComponent } from './admin-components/incoming-suborders/incoming-suborders.component'
import { ReceivedSubordersComponent } from './admin-components/received-suborders/received-suborders.component';


const adminRoutes: Routes = [{path:"admin-login", component:AdminContainerComponent,
                                  children:[{path:"", component:LoginAdminComponent},
                                            {path:"", component:BrandSloganComponent, outlet:"sidebar"}]},
                              {path:"admin", component: AdminContainerComponent, canActivateChild:[AdminRoleCheck],
                                  children:[{path:"control",component:MenuAdminComponent,outlet:"sidebar"},
                                            {path:"probanding", component:ProbandingComponent, outlet:"primary"},
                                            {path: "pendientes", component: PendingOrdersComponent, outlet:"primary"},
                                            {path: "guias", component:AddTrackingComponent, outlet:"primary"},
                                            {path: "realizadas", component: TerminatedOrdersContainerComponent, outlet: "primary",
                                              children:[{path:"en-camino", component: OrdersOnWayComponent},
                                                        {path:"recibidas", component: ReceivedSubordersComponent}]},
                                            {path: "realizadas/en-camino/:id", component: IncomingSubordersComponent},
                                            {path:"**", redirectTo:"/admin/probanding"}]}]


@NgModule({
  imports: [RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

