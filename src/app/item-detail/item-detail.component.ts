import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

    @Input() item:string; //the Input decorator

    @Output() newItemEvent = new EventEmitter<string>();

    
    // @Input() day:string;
    // @Input() infoObject:object;
    // @Output() newItemEvent = new EventEmitter<string>();

    // addNewItem(value: string) {
    //   this.newItemEvent.emit(value);
    // }
  constructor() { }

  ngOnInit(): void {

  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
