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
   imgUrl: string = 'https://spng.subpng.com/20180329/jue/kisspng-angularjs-dart-front-and-back-ends-npm-escalator-5abda7d6ba62f5.4348649815223787107634.jpg'
   disabled: boolean = false

   // number = 42
   // array = [1, 1, 2, 3, 5, 8]
   // obj = {name: 'Maks', info: {age: 34,job: 'Frontend'}}
   ngOnInit() {
      setTimeout(() => {
         this.imgUrl = 'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png';
         this.disabled = true
      }, 2000)
   }
   getInfo(): string {
      return "This is my info"
   }

}