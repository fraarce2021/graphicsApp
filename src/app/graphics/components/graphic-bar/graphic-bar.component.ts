import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styles: [
  ]
})
export class GraphicBarComponent implements OnInit{

  @Input() horizontal: boolean = false;

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
  @Input() barChartLabels: Label[] = [
    // '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A',backgroundColor:'#93FAEA', hoverBackgroundColor:'red' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B',backgroundColor:'#77D9AA', hoverBackgroundColor:'red' },
    // { data: [21, 23, 41, 90, 6, 1, 21], label: 'Series C',backgroundColor:'#90F0A4', hoverBackgroundColor:'red' },
  ];

  ngOnInit(){
    this.barChartType =  this.horizontal ? 'horizontalBar' : 'bar';
  }
}
