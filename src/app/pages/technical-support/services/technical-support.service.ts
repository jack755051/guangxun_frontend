import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TechnicalSupportService {
  constructor() {}

  onPreview(fileNumber: string) {
    console.log('onPreview', fileNumber);
  }

  onDownload(fileNumber: string) {
    console.log('onDownload', fileNumber);
  }
}
