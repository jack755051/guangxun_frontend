import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

@Directive({
  selector: '[appAutoPadding]',
  standalone: true,
})
export class AutoPaddingDirective implements OnInit, OnDestroy {
  @Input('appAutoPadding') sourceSelector!: string;
  @Input() targetStyle: 'padding-top' | 'margin-top' | 'height' = 'padding-top';
  @Input() ratio = 0.1; // 預設除以 10，轉換為 rem

  private observer?: ResizeObserver;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser || !this.sourceSelector) return;

    const sourceEl = document.querySelector(this.sourceSelector) as HTMLElement;


    if (!sourceEl) {
      console.warn(`[appAutoPaddingFrom] 無法找到 ${this.sourceSelector}`);
      return;
    }

    const updateStyle = () => {
      const height = sourceEl.offsetHeight;
      (this.el.nativeElement as HTMLElement).style.setProperty(
        this.targetStyle,
        `${height * this.ratio}rem`,
        // `${height}px`
      );
    };

    updateStyle();

    this.observer = new ResizeObserver(updateStyle);
    this.observer.observe(sourceEl);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
