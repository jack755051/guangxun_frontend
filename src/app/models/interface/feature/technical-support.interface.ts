import { TechnicalSupportFileType } from "../../enum/technical.enum";

export interface ITechnicalSupportFileViewModel {
  id: string;
  fileType: TechnicalSupportFileType;
  fileName: string;
  fileSize: number;
  updatedAt: Date;
  fileUrl: string;
}

export interface TechnicalSupportAction {
  label: string;
  icon?: string;
  action: (fileNumber: string) => void;
}
