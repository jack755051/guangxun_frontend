import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { SearchBarComponent } from '../../feature/search-bar/search-bar.component';
@Component({
  selector: 'guangxun-technical-support',
  standalone: true,
  imports: [MatTabsModule, SearchBarComponent, SharedStandaloneImports],
  templateUrl: './technical-support.component.html',
  styleUrl: './technical-support.component.scss',
})
export class TechnicalSupportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  keyword = '';

  onSearch(keyword: string) {
    this.keyword = keyword;
    console.log('executeSearch', keyword);
  }

  onKeywordChange(keyword: string) {
    this.keyword = keyword;
    console.log('onKeywordChange', keyword);
  }
}
