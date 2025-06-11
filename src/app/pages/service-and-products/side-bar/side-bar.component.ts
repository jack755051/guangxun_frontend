import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SharedStandaloneImports } from '../../../shared/shared-imports';
import { IProductCategoryTreeNodeViewModel } from '../../../models/interface/feature/product-category.interface';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { FaIconWithLink } from '../../../models/interface/shared/shared.interface';
import { ServicesAndProductSidebarIcons } from '../../../shared/fa-icon';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'guangxun-side-bar',
  imports: [SharedStandaloneImports, MatTreeModule, MatIconModule, MatButtonModule],
  standalone: true,
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit {
  @Input() set treeData(data: IProductCategoryTreeNodeViewModel[] | null) {
    if (data?.length) {
      this.assignNodeLevels(data);
      this.dataSource.data = data;
    }
  }
  @Output() nodeClick = new EventEmitter<IProductCategoryTreeNodeViewModel>();
  dataSource = new MatTreeNestedDataSource<IProductCategoryTreeNodeViewModel>();
  treeControl = new NestedTreeControl<IProductCategoryTreeNodeViewModel>((node) => node.children);
  expandedIcon: IconDefinition;
  collapsedIcon: IconDefinition;

  private assignNodeLevels(nodes: IProductCategoryTreeNodeViewModel[], level = 0): void {
    for (const node of nodes) {
      (node as any).__level = level;
      if (node.children && node.children.length > 0) {
        this.assignNodeLevels(node.children, level + 1);
      }
    }
  }

  constructor() {
    this.expandedIcon = ServicesAndProductSidebarIcons.faAngleDown;
    this.collapsedIcon = ServicesAndProductSidebarIcons.faAngleRight;
  }

  ngOnInit(): void {}

  hasChild = (_: number, node: IProductCategoryTreeNodeViewModel) =>
    !!node.children && node.children.length > 0;

  getLevelClass(node: IProductCategoryTreeNodeViewModel): string {
    const level = this.getNodeLevel(node);
    return `level-${level}`;
  }

  getNodeLevel(node: IProductCategoryTreeNodeViewModel): number {
    return (node as any).__level ?? 0;
  }

  // ----- 事件 START ------

  onClickNode(node: IProductCategoryTreeNodeViewModel) {
    console.log('Node clicked:', node);
    this.nodeClick.emit(node);
  }
}
