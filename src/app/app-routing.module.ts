import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StockChartComponent} from './components/highcharts/stock-chart/stock-chart.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomeComponent} from './components/home/home.component';
import {PieChartComponent} from './components/highcharts/pie-chart/pie-chart.component';
import {BarChartComponent} from './components/highcharts/bar-chart/bar-chart.component';
import {DrilldownChartComponent} from './components/highcharts/drilldown-chart/drilldown-chart.component';
import {PlacementChartComponent} from './components/highcharts/placement-chart/placement-chart.component';
import {CombinationChartComponent} from './components/highcharts/combination-chart/combination-chart.component';
import {LineChartComponent} from './components/highcharts/line-chart/line-chart.component';
import {GraphChartComponent} from './components/highcharts/graph-chart/graph-chart.component';
import {VerticalChartComponent} from './components/highcharts/vertical-chart/vertical-chart.component';
import {AverageChartComponent} from './components/highcharts/average-chart/average-chart.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {PyramidChartComponent} from './components/highcharts/pyramid-chart/pyramid-chart.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          {path: '', component: HomeComponent},
          {path: 'stock-chart', component: StockChartComponent},
          {path: 'pie-chart', component: PieChartComponent},
          {path: 'bar-chart', component: BarChartComponent},
          {path: 'drilldown-chart', component: DrilldownChartComponent},
          {path: 'placement-chart', component: PlacementChartComponent},
          {path: 'combo-chart', component: CombinationChartComponent},
          {path: 'line-chart', component: LineChartComponent},
          {path: 'graph-chart', component: GraphChartComponent},
          {path: 'vertical-chart', component: VerticalChartComponent},
          {path: 'average-chart', component: AverageChartComponent},
          {path: 'pyramid-chart', component: PyramidChartComponent},
        ]
      }
    ]
  },
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
