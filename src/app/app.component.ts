import { Component } from '@angular/core';
import { timeEnd } from 'node:console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'send_to_parent';
  data = "";
  updateData(item: string) {
    console.log(item);
    this.data = item;
  }
  name: any;
  // Template Reference variable 
  getVal(item: any) {
    console.log(item);
  }
}
