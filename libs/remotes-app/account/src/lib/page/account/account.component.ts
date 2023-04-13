import { Component } from '@angular/core';

interface Font {
  name: string;
  sampleText: string;
}

@Component({
  selector: 'cwp-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  fonts: Font[] = [
    { name: 'Font 1', sampleText: 'This is a sample text in Font 1' },
    { name: 'Font 2', sampleText: 'This is a sample text in Font 2' },
    { name: 'Font 3', sampleText: 'This is a sample text in Font 3' },
    { name: 'Font 4', sampleText: 'This is a sample text in Font 4' },
    { name: 'Font 5', sampleText: 'This is a sample text in Font 5' }
  ];

  selectFont(font: Font) {
    // Logic to handle font selection
    console.log('Selected Font:', font);
  }
}
