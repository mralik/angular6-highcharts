import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-vertical-chart',
  templateUrl: './vertical-chart.component.html',
  styleUrls: ['./vertical-chart.component.scss']
})
export class VerticalChartComponent implements OnInit {
  chart: any;
  constructor() {
  }

  ngOnInit() {
    this.renderChart();
  }

  renderChart() {
    this.chart = new Chart(<any> {

      chart: {
        type: 'column'
      },

      title: {
        text: 'Bar chart'
      },

      subtitle: {
        text: 'Some example results'
      },

      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
      },

      xAxis: {
        categories: ['Apples', 'Oranges', 'Bananas'],
        labels: {
          x: -10
        }
      },

      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Amount'
        }
      },

      credits: {
        enabled: false
      },

      series: [{
        name: 'Christmas Eve',
        data: [1, 4, 3]
      }, {
        name: 'Christmas Day before dinner',
        data: [6, 4, 2]
      }, {
        name: 'Christmas Day after dinner',
        data: [8, 4, 3]
      }]
    });

  }


}
