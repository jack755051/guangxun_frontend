import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'guangxun-pagination',
  imports: [NgxPaginationModule, NgIf, NgFor, NgClass, FormsModule],
  standalone: true,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input() id = 'pagination';
  @Input() pageIndex = 1;
  @Input() limit = 10;
  @Input() total = 0;
  @Input() disabled = false;
  @Input() previousLabel = '上一頁';
  @Input() nextLabel = '下一頁';
  @Input()
  pageSizeOptions = [5, 10, 20, 50]; // 可切換筆數
  // 外觀
  @Input() paginationClassMap: {
    paginationContainer?: string | string[] | Set<string> | { [klass: string]: any };
    pageSizeSelector?: string | string[] | Set<string> | { [klass: string]: any };
    paginationCenter?: string | string[] | Set<string> | { [klass: string]: any };
  } = {};

  // event emitters for page change and page size change
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }

  onPageSizeChange(): void {
    this.pageSizeChange.emit(this.limit);
    this.pageChange.emit(1); // 切換 pageSize 自動重設頁碼為 1
  }
}
