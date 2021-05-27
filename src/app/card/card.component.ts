import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-card',
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.scss'],
   interpolation: ['{{', '}}']
})

export class CardComponent implements OnInit {
   title: string = 'My Card Title'
   text: string = 'My text'

   ngOnInit() { }
   changeTitle() {
      this.title = "This title has been changed"
   }

}