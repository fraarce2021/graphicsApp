import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path:'bars', component:BarsComponent },
      { path:'bars-double', component: BarsDoubleComponent },
      { path:'donut', component: DonutComponent },
      { path:'donut-http', component: DonutHttpComponent },
      { path:'**', redirectTo:'bars' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
