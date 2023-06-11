import { Component, OnInit } from '@angular/core'
//import { DatePicker } from "tns-core-modules/ui/date-picker";

//import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})

export class ItemsComponent implements OnInit {
  myName : string;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.myName = "Yulia";
  }
  btnClicked(evt){
    console.log(evt)
    console.log("Button Clicked")
  }
}

