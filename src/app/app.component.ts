import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'luis schwartskopf';
  imgURL = 'https://picsum.photos/id/237/500/500';
  currentDate = new Date();
  cost = 2000;
  temperature = 253.6;
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large',
  };
  images = [
    'https://picsum.photos/id/238/500/500',
    'https://picsum.photos/id/239/500/500',
    'https://picsum.photos/id/240/500/500',
  ]
  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  }

  onChangeImage(event: KeyboardEvent) {
    this.imgURL = (event.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
