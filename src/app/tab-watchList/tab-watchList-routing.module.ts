import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchListPage } from './tab-watchList.page';

const routes: Routes = [
  {
    path: '',
    component: WatchListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchListPageRoutingModule {}
