import { Component } from '@angular/core';

@Component({
  selector: 'cwp-selection-component',
  templateUrl: './selection-component.component.html',
  styleUrls: ['./selection-component.component.scss'],
})
export class SelectionComponentComponent {


  draggedProduct: any;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  sidebarVisible4!: boolean;
  images: any[] = [
    // fake data
    {
      src: 'https://via.placeholder.com/300',
      alt: 'Image 1',
      title: 'Image 1',
    },
    {
      src: 'https://via.placeholder.com/300',
      alt: 'Image 2',
      title: 'Image 2',
    },
    {
      src: 'https://via.placeholder.com/300',
      alt: 'Image 3',
      title: 'Image 3',
    },
    {
      src: 'https://via.placeholder.com/300',
      alt: 'Image 4',
      title: 'Image 4',
    },
    {
      src: 'https://via.placeholder.com/300',
      alt: 'Image 5',
      title: 'Image 5',
    },
    {
      src: 'https://via.placeholder.com/300',
      alt: 'Image 6',
      title: 'Image 6',
    },
    {
      src: 'https://via.placeholder.com/300',
      alt: 'Image 7',
      title: 'Image 7',
    },
    {
      src: 'https://via.placeholder.com/300',
      alt: 'Image 8',
      title: 'Image 8',
    },
  ];

  dragStart(product: any) {
    this.draggedProduct = product;
  }

  dragEnd() {
    this.draggedProduct = null;
  }
}
