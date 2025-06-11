import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { SearchService, SearchState } from './service/search.service';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'guangxun-search-bar',
  standalone: true,
  imports: [SharedStandaloneImports, SearchComponent, FilterComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent<T> {
  @Output() keywordChanged = new EventEmitter<string>();
  @Output() searchTriggered = new EventEmitter<SearchState>();
  @Input() showFilter: boolean = false;

  private _searchService = inject(SearchService);

  constructor() {
    this._searchService.keyword$.subscribe((keyword) => {
      this.keywordChanged.emit(keyword); // <--- 新增 emit
    });

    this._searchService.searchTrigger$.subscribe((state) => {
      this.searchTriggered.emit(state);
    });
  }
}
