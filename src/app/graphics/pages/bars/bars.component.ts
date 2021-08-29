import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styles: [
  ]
})
export class BarsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',backgroundColor:'#93FAEA', hoverBackgroundColor:'red' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',backgroundColor:'#77D9AA', hoverBackgroundColor:'red' },
    { data: [21, 23, 41, 90, 6, 1, 21], label: 'Series C',backgroundColor:'#90F0A4', hoverBackgroundColor:'red' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values
    for (let index = 0; index <= 2; index++) {
      this.barChartData[index].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ];
    }
  }
}
