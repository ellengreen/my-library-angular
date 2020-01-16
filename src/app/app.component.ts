import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';

  toRead = [
    new Book('Severance', 'Ling Ma', 2018),
    new Book('Little Weirds', 'Jenny Slate', 2019),
    new Book('Watchmen', 'Alan Moore & Dave Gibbons', 1986),
    new Book('Cherry', 'Niko Walker', 2018)
  ];
}
