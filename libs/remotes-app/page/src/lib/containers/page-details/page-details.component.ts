import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Header1UiComponent } from '../../../../../../shared/features/src/lib/header-1/header-1-ui/header-1-ui.component';
import { DATA_PREVIEW, DATA_SIDE_BAR } from './mockdata';

@Component({
  selector: 'cwp-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss'],
})
export class PageDetailsComponent implements AfterViewInit {

  items: any[] = DATA_PREVIEW;

  sidebarVisible4!: boolean;
  images: any[] = DATA_SIDE_BAR;

  @ViewChild('componentContainer', { read: ViewContainerRef }) componentContainer!: ViewContainerRef;

  constructor(private renderer: Renderer2, private el: ElementRef, private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    // Create a component factory
    const factory = this.resolver.resolveComponentFactory(Header1UiComponent);

    // Use Renderer2 to create a new element with the component's selector
    const componentRef = factory.create(this.componentContainer.injector);

    // Append the component to the component container using Renderer2
    this.renderer.appendChild(this.componentContainer.element.nativeElement, componentRef.location.nativeElement);
  }

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
    this.images = DATA_SIDE_BAR;

  }
}
