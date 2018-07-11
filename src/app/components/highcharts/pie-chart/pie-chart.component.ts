import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Pie Chart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
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
