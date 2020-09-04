import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-reportviewer',
  template: `
    <p>
      ng-reportviewer works!
    </p>
  `,
  styles: []
})
export class NgReportviewerComponent implements OnInit {

  @Input()
  serverAddress: string;

  @Input()
  reportURLAddress: string;


  constructor() { }

  ngOnInit() {
  }

}
