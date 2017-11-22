import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
  radio_alert:number;
  alerta:string='alert-success'
  textProp:Object={
    danger:true
  }
  constructor() { }

  ngOnInit() {
  }
  changeAlert(value_alert){
    switch(value_alert){
      case 1:
        this.alerta='alert-success'
      break;
      case 2:
        this.alerta='alert-info'
      break;
      case 3:
        this.alerta='alert-warning'
      break;
      case 4:
        this.alerta='alert-danger'
      break;
      default:
        this.alerta='alert-info'
      break;
    }
  }

}
