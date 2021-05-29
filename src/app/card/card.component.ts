import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
   selector: 'app-card',
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.scss'],
   interpolation: ['{{', '}}']
})

export class CardComponent implements OnInit {

   @Input() card: Card = { title: "", text: "" }

   title: string = 'My Card Title'
   text: string = 'My text'
   textColor: string = ''

   ngOnInit() {
      // console.log("Initialization");
   }

   changeTitle() {
      this.card.title = "This title has been changed"
   }

   // inputHandler(value: any) {
   //    // const value = event.target.value
   //    this.title = value }
   changeHandler() {
      console.log(this.title);
   }
}