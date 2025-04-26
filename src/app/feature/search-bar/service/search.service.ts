import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FilterButton } from '../models/filter.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _keyword = new BehaviorSubject<string>('');
  private _filter = new BehaviorSubject<FilterButton | null>(null);

  searchTrigger$ = new Subject<{
    keyword: string;
    filter?: { label: string; value: string; icon: string };
  }>();

  keyword$ = this._keyword.asObservable();
  filter$ = this._filter.asObservable();

  setKeyword(keyword: string) {
    this._keyword.next(keyword);
  }

  setFilter(filter: any) {
    this._filter.next(filter);
  }

  getCurrentState() {
    const keyword = this._keyword.value;
    const filterObj = this._filter.value;

    if (!filterObj || !filterObj.isActive) {
      // 沒選篩選器 或 沒啟動的話，只送 keyword
      return { keyword };
    }

    // 否則送出乾淨版的 filter
    return {
      keyword,
      filter: {
        label: filterObj.label,
        value: filterObj.value,
        icon: filterObj.icon,
      },
    };
  }

  triggerSearch() {
    const state = this.getCurrentState();
    console.log('[SearchService] triggerSearch送出:', state); // 👈✅ 新增
    this.searchTrigger$.next(state);
  }

  constructor() {}
}
