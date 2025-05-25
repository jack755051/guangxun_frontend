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
  @Input() pageSizeOptions = [5, 10, 20, 50]; // 可切換筆數
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
