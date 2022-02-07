import { Component, Input, OnInit} from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {
  ngOnInit(): void {
    // this.doughnutChartLabels=this.labels
    this.doughnutChartData={
      labels: this.labels,
      datasets: [{ data:this.data 
      ,backgroundColor:["#33D4FF","#BE37AC","#4BD91E","#D95A1E","#D91E35"],
          }
      ]
    };
  }
  @Input() title:string = 'Titulo';
  @Input() labels:string[]=[];
  @Input() data:number[]=[];
  
  // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartLabels: string[] =[]
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [{ data:this.data 
    ,backgroundColor:["#9e120e","#FF5800","#FFB400"],
        }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
