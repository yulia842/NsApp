import { Component, OnInit } from '@angular/core'
import { DatePicker } from "tns-core-modules/ui/date-picker";

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})

export class ItemsComponent implements OnInit {
  items: Array<Item>
  minDate: Date = new Date(1975, 0, 29);
  maxDate: Date = new Date(2045, 4, 12);

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }
  onDatePickerLoaded(args) {
    // const datePicker = args.object as DatePicker;
}

onDateChanged(args) {
    console.log("Date New value: " + args.value);
    console.log("Date value: " + args.oldValue);
}

onDayChanged(args) {
    console.log("Day New value: " + args.value);
    console.log("Day Old value: " + args.oldValue);
}

onMonthChanged(args) {
    console.log("Month New value: " + args.value);
    console.log("Month Old value: " + args.oldValue);
}

onYearChanged(args) {
    console.log("Year New value: " + args.value);
    console.log("Year Old value: " + args.oldValue);
}
}

