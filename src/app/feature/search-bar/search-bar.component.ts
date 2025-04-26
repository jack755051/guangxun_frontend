import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { SearchService } from './service/search.service';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'guangxun-search-bar',
  standalone: true,
  imports: [SharedStandaloneImports, SearchComponent, FilterComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Output() searchTriggered = new EventEmitter<{ keyword: string; filter?: any }>();
  @Input() showFilter: boolean = false;

  private _searchService = inject(SearchService);

  constructor() {
    this._searchService.searchTrigger$.subscribe(() => {
      const state = this._searchService.getCurrentState();
      this.searchTriggered.emit(state);
    });
  }
}
