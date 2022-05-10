import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor() { }

  test(): void {
    console.log("clicked on button")
    
  }

  ngOnInit(): void {
  }

}
