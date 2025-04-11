import { Component, Input, Output, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { DialogType } from '../../model';
import { DialogElementContent } from '../../model/interface/dialog-element.interface';
@Component({
  selector: 'guangxun-shell-content',
  imports: [FontAwesomeModule, CommonModule],
  standalone: true,
  templateUrl: './shell-content.component.html',
  styleUrl: './shell-content.component.scss',
})
export class ShellContentComponent {
  @Input() type!: DialogType;
  @Input() content!: DialogElementContent;
  @ViewChild('contentContainer', { read: ViewContainerRef, static: true })
  contentContainer!: ViewContainerRef;
  get isTextContent(): boolean {
    return this.content?.type === 'text';
  }

  get text(): string {
    return (this.content as { type: 'text'; text: string }).text;
  }

  ngAfterViewInit(): void {
    if (this.content?.type === 'form') {
      this.loadDynamicComponent(this.content.form);
    }
  }

  private loadDynamicComponent(component: Type<unknown>): void {
    this.contentContainer.clear();
    this.contentContainer.createComponent(component);
  }
}
