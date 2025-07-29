import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ApiService as TechnicalApiService } from "../../apis/technical-support/api.service";
import { MockHomePageService } from "../../mocks/services/mock-home-page.service";
import { TechnicalDocumentAndFileActions } from "./action";
import { catchError, map, switchMap, of } from "rxjs";

@Injectable()
export class TechnicalDocumentAndFileEffects {
  private _store = inject(Store);
  private _actions$ = inject(Actions);
  private _service = inject(TechnicalApiService);
  private _mockService = inject(MockHomePageService);

  constructor() { }

  loadTechnicalDocuments$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TechnicalDocumentAndFileActions.loadTechnicalDocuments),
      switchMap(action =>
        this._service.getTechnicalDocuments(action.payload).pipe(
          map(documents => TechnicalDocumentAndFileActions.loadTechnicalDocumentsSuccess({ documents })),
          catchError(error => of(TechnicalDocumentAndFileActions.loadTechnicalDocumentsFailure({ error })))
        )
      )
    )
  );

  // 新增：專門用於載入 Mock 資料的 Effect
  loadMockTechnicalDocuments$ = createEffect(() =>
    this._actions$.pipe(
      ofType(TechnicalDocumentAndFileActions.loadMockTechnicalDocuments),
      switchMap(action =>
        this._mockService.getTechnicalSupports().pipe(
          map(documents => TechnicalDocumentAndFileActions.loadTechnicalDocumentsSuccess({ documents })),
          catchError(error => of(TechnicalDocumentAndFileActions.loadTechnicalDocumentsFailure({ error })))
        )
      )
    )
  );
}
