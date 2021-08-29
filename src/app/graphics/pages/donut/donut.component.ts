import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor:[
        '#E87943',
        '#F26546',
        '#DB4E4A',
        '#F24689'
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
