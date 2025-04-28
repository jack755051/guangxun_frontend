export interface TechnicalSupportFile {
  id: string;
  fileType: 'fileDownload' | 'document';
  fileName: string;
  fileSize: number;
  updatedAt: Date;
  fileUrl: string;
}

export interface TechnicalSupportAction {
  label: string;
  icon?: string;
  action: () => void;
}
