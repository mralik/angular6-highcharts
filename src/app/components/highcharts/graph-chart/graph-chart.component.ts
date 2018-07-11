import {Component, OnInit} from '@angular/core';
import {Highcharts} from 'angular-highcharts';
import {SampleApiService} from '../../../services/api/sample.api.service';

@Component({
  selector: 'app-graph-chart',
  templateUrl: './graph-chart.component.html',
  styleUrls: ['./graph-chart.component.scss']
})
export class GraphChartComponent implements OnInit {
  categoryList: any[];

  constructor(private sampleApiService: SampleApiService) {
  }

  ngOnInit() {
    this.getCategoryList();
  }


  getCategoryList() {
    this.sampleApiService.getCategoryList().then(
      (response: any[]) => {
        this.categoryList = response;
        this.renderChart();
      }
    );
  }

  renderChart() {
    Highcharts.chart('container', {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'USD to EUR exchange rate over time'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              // [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      credits: {
        enabled: false
      },

      series: [{
        type: 'area',
        name: 'USD to EUR',
        data: this.categoryList
      }]
    });

  }

}
