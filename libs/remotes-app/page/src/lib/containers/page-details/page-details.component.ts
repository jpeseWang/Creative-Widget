/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ComponentFactoryResolver, ElementRef, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../../../../../../shared/features/src/lib/setup-component/edit-dialog/edit-dialog.component';
import { DATA_PREVIEW, DATA_SIDE_BAR } from './mockdata';

@Component({
  selector: 'cwp-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss'],
})
export class PageDetailsComponent {

  showButton: string | null = null;

  sidebarVisible4!: boolean;

  items: any[] = DATA_PREVIEW;

  images: any[] = DATA_SIDE_BAR;

  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer!: ViewContainerRef;

  constructor(
    private renderer: Renderer2, private el: ElementRef,
    private resolver: ComponentFactoryResolver,
    public dialog: MatDialog,
  ) {}

  drop(event: CdkDragDrop<string[]>): void {
    console.log('event', event.container.data);
    // Get the dragged item and its previous index
    const prevIndex = event.previousIndex;

    console.log('prevIndex', prevIndex);

    // If the item was dropped within the same list
    if (event.container === event.previousContainer) {
      // Move the item to the new index within the same list
      moveItemInArray(this.items, prevIndex, event.currentIndex);
    }
    // If the item was dropped from a different list
    else {
      // Add the dragged item to the new list
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.showButton = null;
  }
  onMouseEnter(item: any, i: number): void {
    // check is dragging or not
    if (this.showButton) {
      return;
    }

    this.showButton = item;
  }

  onMouseLeave(item: any, i: number): void {
    if (this.showButton === item) {
      this.showButton = null;
    };
  }

  onButtonClick(data: any): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '700px',
      data
    });
  }
}
