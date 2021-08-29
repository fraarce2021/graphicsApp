import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-bars-double',
  templateUrl: './bars-double.component.html',
  styles: [
  ]
})
export class BarsDoubleComponent implements OnInit {

  providersData: ChartDataSets[] = [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];

  yearsLabels: string[] = ['2021', '2022','2023','2024','2025'];

  productData: ChartDataSets[] = [
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
