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
  val: { name: string, phone: number } = { name: "asadUllah", phone: 4646932 };
  item: string[] = ["asad", "you", "bilal"];
  getObj(item: number | boolean) {
    if (typeof item === "number") {
      console.log(item * 2);
    }
  }
  getArr(item: number[]) {
  }

  getDate = Date();
}
