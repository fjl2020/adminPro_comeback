import { Component, Input, Output ,EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass=`btn ${this.btnClass}`
  }
  
  @Input('valor') progressPerc: number = 25
  @Input() btnClass:string="btn btn-primary"
  // @Input() progressPerc: number = 25
  @Output() outputVal:EventEmitter<number>=new EventEmitter();

  changeVal(val:number){
    if (this.progressPerc+val<=100 )
    {
      if (this.progressPerc+val<=0){
        this.outputVal.emit(0);
        return this.progressPerc=0
      }else{
        this.outputVal.emit(this.progressPerc+val);
        return this.progressPerc=this.progressPerc+val
      }
      
    }else{
      this.outputVal.emit(100);
      return this.progressPerc=100
    }
  }

  onChange(event:any){
      console.log(event)
      
      if (event==null)
      {
        this.progressPerc=0
        
      }else if(event>100){
        this.progressPerc=100

      }else if (event<0){
        this.progressPerc=0
      }else{
        this.progressPerc=event
      }
      this.outputVal.emit(this.progressPerc);
  }

}
