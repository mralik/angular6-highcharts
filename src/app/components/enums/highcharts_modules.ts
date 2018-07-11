import exporting from 'highcharts/modules/exporting.src.js';
import exportData from 'highcharts/modules/export-data.src.js';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
import drillDown from 'highcharts/modules/drilldown.src.js';
import annotations from 'highcharts/modules/annotations.js';
import funnel from 'highcharts/modules/funnel.js';


export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [
    exporting,
    exportData,
    stock,
    more,
    drillDown,
    annotations,
    funnel
  ];
}
