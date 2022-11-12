import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childPost: any[] = []
  @Output() passedEvent = new EventEmitter();
  data: string = 'Child data';

  constructor() { }

  ngOnInit(): void {
  }
  
  PassEvent(){
    console.log("dsdsa")
    this.passedEvent.emit(this.data);
  }
}
