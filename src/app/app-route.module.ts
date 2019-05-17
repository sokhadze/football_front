import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './shared/register/register.component';
import {AuthGuard} from './guards/auth.guard';
import {UnAuthGuard} from './guards/un-auth.guard';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './shared/contact/contact.component';
import {ArticleShowComponent} from './shared/article-show/article-show.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent, pathMatch: 'full'},
  {path: 'show/', component: ArticleShowComponent, pathMatch: 'full'},
  // {path: 'wallet', component: WalletComponent, canActivate: [UnAuthGuard]},
  // // {path: '', component: WalletComponent, canActivate: [UnAuthGuard]},
  // {path: 'payments', component: PaymentsComponent, canActivate: [UnAuthGuard]},
  // {path: 'contact', component: ContactComponent, canActivate: [UnAuthGuard]},
  // {path: 'fill-deposit', component: FillDepositComponent, canActivate: [UnAuthGuard]},
  // {path: 'exchange', component: ExchangeComponent, canActivate: [UnAuthGuard]},
  // {path: 'withdraw', component: WithdrawComponent, canActivate: [UnAuthGuard]},
  // {path: 'transfers', component: TransfersComponent, canActivate: [UnAuthGuard]},
  // {path: 'remittance', component: RemittanceComponent, canActivate: [UnAuthGuard]},
  // {path: 'transactions', component: TransactionsComponent, canActivate: [UnAuthGuard]},
  // {path: 'admin', component: AdminComponent, canActivate: [UnAuthGuard]},
  // {path: 'companyControlPanel', component: CompanyControlPanelComponent, canActivate: [UnAuthGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouteModule { }
