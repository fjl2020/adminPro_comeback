import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'
  ]
})
export class ProgressComponent {

  progress1:number=10;
  progress2:number=20;

  get getProgress1(){
    return `${this.progress1}%`;
  }
  
  get getProgress2(){
    return `${this.progress2}%`;
  }
  progressChange1(val:number){
    this.progress1=val;
  }
  progressChange2(val:number){
    this.progress2=val;
  }
}
