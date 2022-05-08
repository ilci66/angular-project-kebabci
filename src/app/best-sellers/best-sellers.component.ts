import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {
  
  constructor() { }
  allItems = ["item 1", "item 2", "item 3"]

  ngOnInit(): void {
  }

}
