import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements OnInit {

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
  constructor(private graphicsService:GraphicsService) { }

  ngOnInit(): void {
    this.graphicsService.getUserSocialMedia()
    .subscribe(data=>{
      const labels = Object.keys(data);
      const values = Object.values(data);

      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values)
    });
  }

}
