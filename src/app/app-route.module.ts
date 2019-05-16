import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './shared/register/register.component';
import {AuthGuard} from './guards/auth.guard';
import {UnAuthGuard} from './guards/un-auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, canActivate: [UnAuthGuard]},
  // {path: 'home', component: HomeComponent, canActivate: [UnAuthGuard]},
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
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouteModule { }
