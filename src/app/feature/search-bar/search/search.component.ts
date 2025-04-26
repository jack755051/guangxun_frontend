import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'guangxun-search',
  standalone: true,
  imports: [SharedStandaloneImports],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  keyword = '';

  private _searchService = inject(SearchService);

  constructor() {
    this._searchService.keyword$.subscribe((keyword) => {
      this.keyword = keyword;
    });
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('[SearchComponent] 使用者輸入:', target.value);
    this._searchService.setKeyword(target.value);
  }

  onClickSearch() {
    console.log('[SearchComponent] 點擊搜尋，當前keyword:', this.keyword);
    this._searchService.triggerSearch();
  }
}
