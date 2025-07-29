import { createReducer, on } from '@ngrx/store';
import { ITechnicalSupportFileViewModel } from '../../models/interface/feature/technical-support.interface';
import { TechnicalDocumentAndFileActions } from './action';

export interface TechnicalDocumentAndFileState {
  documents: ITechnicalSupportFileViewModel[];
  loading: boolean;
  error: any;
}

export const initialState: TechnicalDocumentAndFileState = {
  documents: [],
  loading: false,
  error: null,
};

export const technicalDocumentAndFileReducer = createReducer(
  initialState,
  on(TechnicalDocumentAndFileActions.loadTechnicalDocuments, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TechnicalDocumentAndFileActions.loadTechnicalDocumentsSuccess, (state, { documents }) => ({
    ...state,
    documents,
    loading: false,
    error: null,
  })),
  on(TechnicalDocumentAndFileActions.loadTechnicalDocumentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
