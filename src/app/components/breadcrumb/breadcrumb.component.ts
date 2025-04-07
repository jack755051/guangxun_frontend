import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../models/types/breadcrumb.type';
import { BreadcrumbService } from './breadcrumb.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'guangxun-breadcrumb',
  imports: [CommonModule, TranslateModule, RouterModule],
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  constructor(private _breadcrumbService: BreadcrumbService) {}
  breadcrumbs: Breadcrumb[] = [];
  ngOnInit(): void {
    this._breadcrumbService.breadcrumbs$.subscribe((data) => {
      this.breadcrumbs = data;
    });
  }
}
