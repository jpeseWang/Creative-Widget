import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}


@Component({
  selector: 'cwp-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainerComponent {
  cards: Card[] = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is the description for card 1',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the description for card 2',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is the description for card 3',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'This is the description for card 4',
      imageUrl: 'https://via.placeholder.com/300'
    }
  ];
  constructor(
    private router: Router
  ) {}

  openNewPage(): void {
    // window.open('https://www.google.com', '_blank');
  }

  openPage(id: number) {
    this.router.navigate([`/page/${id}`]);
  }
}
