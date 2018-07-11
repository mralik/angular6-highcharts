import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ChartModule, HIGHCHARTS_MODULES} from 'angular-highcharts';
import {StockChartComponent} from './components/highcharts/stock-chart/stock-chart.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {highchartsModules} from './components/enums/highcharts_modules';
import {HighchartsComponent} from './components/highcharts/highcharts.component';
import { HomeComponent } from './components/home/home.component';
import { PieChartComponent } from './components/highcharts/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/highcharts/bar-chart/bar-chart.component';
import { DrilldownChartComponent } from './components/highcharts/drilldown-chart/drilldown-chart.component';
import { PlacementChartComponent } from './components/highcharts/placement-chart/placement-chart.component';
import { CombinationChartComponent } from './components/highcharts/combination-chart/combination-chart.component';
import { LineChartComponent } from './components/highcharts/line-chart/line-chart.component';
import { GraphChartComponent } from './components/highcharts/graph-chart/graph-chart.component';
import {SampleApiService} from './services/api/sample.api.service';
import { NgHttpLoaderModule } from 'ng-http-loader';
import {VerticalChartComponent} from './components/highcharts/vertical-chart/vertical-chart.component';
import { AverageChartComponent } from './components/highcharts/average-chart/average-chart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PyramidChartComponent } from './components/highcharts/pyramid-chart/pyramid-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    HighchartsComponent,
    StockChartComponent,
    DashboardComponent,
    HomeComponent,
    PieChartComponent,
    BarChartComponent,
    DrilldownChartComponent,
    PlacementChartComponent,
    CombinationChartComponent,
    LineChartComponent,
    GraphChartComponent,
    VerticalChartComponent,
    AverageChartComponent,
    NotFoundComponent,
    PyramidChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule,
    NgHttpLoaderModule
  ],
  providers: [
    SampleApiService,
    {provide: HIGHCHARTS_MODULES, useFactory: highchartsModules} // add as factory to your providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
