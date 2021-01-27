import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'martyn-conkling-practice-app-two';

  currentItem:string = "Nintendo 64";

  items = ['item1', 'item2', 'item3', 'item4', "example"];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  // currentDay:string = "Today's"
  // yesterItem:string = "Pineapple"
  // yesterday:string = "Yesterday's"

  // tomorrowItem:string = "A Bicycle"
  // tomorrow:string ="Tomorrow's"

  // items = ['item1', 'item2', 'item3', 'item4'];

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }


  


  
}
