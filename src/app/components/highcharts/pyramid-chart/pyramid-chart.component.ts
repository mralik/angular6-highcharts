import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-pyramid-chart',
  templateUrl: './pyramid-chart.component.html',
  styleUrls: ['./pyramid-chart.component.scss']
})
export class PyramidChartComponent implements OnInit {
  pyramid: Chart;

  constructor() {

  }

  ngOnInit() {
    this.renderChart();
  }

  renderChart() {
    this.pyramid = new Chart(<any>{
      chart: {
        type: 'pyramid'
      },
      title: {
        text: 'Sales pyramid',
        x: -50
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b> ({point.y:,.0f})',
            softConnector: true
          },
          center: ['40%', '50%'],
          width: '80%'
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Unique users',
        data: [
          ['Website visits', 15654],
          ['Downloads', 4064],
          ['Requested price list', 1987],
          ['Invoice sent', 976],
          ['Finalized', 846]
        ]
      }]
    });

  }

}
