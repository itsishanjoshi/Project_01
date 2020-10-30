import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import { KindleComponent } from './kindle/kindle.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Header/register/register.component';
import { LoginComponent } from './Header/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'kindlehome',
    component: KindleComponent,
  },
  {
    path: 'eCart',
    component: UnderconstructionComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
