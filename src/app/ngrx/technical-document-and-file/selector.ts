import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TechnicalDocumentAndFileState } from './reducer';

export const selectTechnicalDocumentAndFileState = createFeatureSelector<TechnicalDocumentAndFileState>('technicalDocumentAndFile');

export const selectTechnicalDocuments = createSelector(
  selectTechnicalDocumentAndFileState,
  (state) => state.documents
);

export const selectTechnicalDocumentsLoading = createSelector(
  selectTechnicalDocumentAndFileState,
  (state) => state.loading
);

export const selectTechnicalDocumentsError = createSelector(
  selectTechnicalDocumentAndFileState,
  (state) => state.error
);
