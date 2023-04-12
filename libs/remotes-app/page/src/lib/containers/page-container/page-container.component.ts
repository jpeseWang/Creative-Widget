import { Component } from '@angular/core';
interface Document {
  id: number;
  title: string;
}

@Component({
  selector: 'cwp-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainerComponent {
  documents: Document[];
  constructor() {
    // Mock data for documents
    this.documents = [
      { id: 1, title: 'Document 1' },
      { id: 2, title: 'Document 2' },
      { id: 3, title: 'Document 3' },
      { id: 4, title: 'Document 4' },
      // Add more documents as needed
    ];
  }
}
