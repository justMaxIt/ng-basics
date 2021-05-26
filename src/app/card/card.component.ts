import { Component } from '@angular/core';

@Component({
   selector: 'app-card',
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.scss'],
   interpolation: ['{{', '}}']
})

export class CardComponent {
   title = 'My Card Title'
   text = 'My text'
   number = 42
   array = [1, 1, 2, 3, 5, 8]
   obj = {
      name: 'Maks',
      info: {
         age: 34,
         job: 'Frontend'
      }
   }

}