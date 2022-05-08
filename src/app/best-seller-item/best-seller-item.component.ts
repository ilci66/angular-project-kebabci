import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-seller-item',
  templateUrl: './best-seller-item.component.html',
  styleUrls: ['./best-seller-item.component.css']
})
export class BestSellerItemComponent implements OnInit {

  constructor() { }

  @Input() items:string[] = [];

  ngOnInit(): void {
  }

}
