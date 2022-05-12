import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {add, remove, reset, test} from '../actions/index'
import { Cart, Item } from '../state/models';
import { 
  selectCartState, 
  selectItems, 
  selectState 
} from '../state/selectors';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  // totalPrice$: Observable<number>;
  // names$: Observable<string[]>;

  cart$: Observable<readonly Cart[]>;
  items$: Observable<readonly Item[]>;
  
  constructor(private store: Store<{totalPrice:number, names:string[]}>) {
    // this.totalPrice$ = this.store.select('totalPrice');
    // this.names$ = store.select('names');

    this.cart$ = this.store.select(selectCartState);
    this.items$ = this.store.select(selectItems);
  }

  test(): void {
    console.log("clicked on button")
    this.store.dispatch(test())
    console.log(this.store)
  }
  add(): void {
    console.log("want to add");

    this.store.dispatch(add({id:2, name: "doner", price: 2}))

    // console.log(this.store.select('names'), this.store.select('totalPrice'))
    console.log(this.cart$)
  }

  ngOnInit(): void {
  }

}
