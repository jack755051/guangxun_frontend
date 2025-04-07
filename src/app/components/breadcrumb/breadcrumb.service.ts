import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Breadcrumb } from './breadcrumb.type';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private _breadcrumbs = new BehaviorSubject<Breadcrumb[]>([]);
  public readonly breadcrumbs$ = this._breadcrumbs.asObservable();

  constructor(private _router: Router) {
    this._router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      const root = this._router.routerState.snapshot.root;
      let breadcrumbs = this._buildBreadcrumbs(root);

      const isAtHome = this._router.url === '/' || this._router.url === '/home';

      if (!isAtHome) {
        breadcrumbs = [
          {
            label: 'ROUTES.HOME',
            link: '/home',
            isClickable: true,
          },
          ...breadcrumbs,
        ];
      }

      // 確保最後一層不可點擊
      if (breadcrumbs.length > 0) {
        breadcrumbs[breadcrumbs.length - 1].isClickable = false;
      }

      this._breadcrumbs.next(breadcrumbs);
    });
  }

  private _buildBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: Breadcrumb[] = [],
  ): Breadcrumb[] {
    const children: ActivatedRouteSnapshot[] = route.children;

    if (route.data?.['breadcrumb']) {
      const segment = route.url.map((s) => s.path).join('/');
      const fullPath = segment ? `${url}/${segment}` : url;

      const crumb: Breadcrumb = {
        ...route.data['breadcrumb'],
        link: fullPath || '/',
        isClickable: route.data['breadcrumb'].isClickable !== false,
      };

      breadcrumbs.push(crumb);
    }

    for (const child of children) {
      return this._buildBreadcrumbs(
        child,
        `${url}/${child.url.map((s) => s.path).join('/')}`,
        breadcrumbs,
      );
    }

    return breadcrumbs;
  }
}
