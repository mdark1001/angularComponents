import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html'
})
export class NgSwitchComponent implements OnInit {
  alerta:string='primary'
  radioItems='success info primary danger dark secondary light'.split(' ').sort();
  constructor() { }

  ngOnInit() {
  }

}
