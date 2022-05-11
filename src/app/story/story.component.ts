import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as myActions from '../actions/index'

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  totalPrice$: Observable<number>;
  names$: Observable<string[]>;

  constructor(private store: Store<{totalPrice:number, names:string[]}>) {
    this.totalPrice$ = store.select('totalPrice');
    this.names$ = store.select('names');
  }

  test(): void {
    console.log("clicked on button")
    this.store.dispatch(myActions.test())
  }


  ngOnInit(): void {
  }

}
