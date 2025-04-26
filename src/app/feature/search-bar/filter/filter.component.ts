import { Component, inject } from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'guangxun-filter',
  standalone: true,
  imports: [SharedStandaloneImports],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  private _searchService = inject(SearchService);

  onFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this._searchService.setFilter(target.value);
    this._searchService.triggerSearch();
  }
}
