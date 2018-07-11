import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Bar chart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3, 4, 5]
      },
      {
        name: 'Line 2',
        data: [1, 2, 3, 0, 1]
      }
    ]
  });

  constructor() {
  }

  ngOnInit() {
  }

  // add point to chart series
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }


}
