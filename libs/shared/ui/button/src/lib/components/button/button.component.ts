import { Component, Input } from '@angular/core';

@Component({
  selector: 'cwp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {

  @Input() text = '';
}
