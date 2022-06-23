import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Luis';
  imgURL = 'https://picsum.photos/id/237/500/500';

  getName() {
    return this.name;
  }

  onChangeImage(event: KeyboardEvent) {
    this.imgURL = (event.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event)
  }
}
