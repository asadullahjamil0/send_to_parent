import { Component, Output, EventEmitter } from '@angular/core';
import { eventNames } from 'node:process';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() updateDataEvent = new EventEmitter<string>();
}
