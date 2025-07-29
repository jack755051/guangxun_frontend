import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ITechnicalSupportFileViewModel } from "../../models/interface/feature/technical-support.interface";
import { ITechnicalSupportFileViewModelReqDto } from "../../apis/technical-support/req.dto";

export const TechnicalDocumentAndFileActions = createActionGroup({
  source: 'technical-document-and-file',
  events: {
    /** Technical Documents - 真實 API */
    "Load Technical Documents": props<{ payload: ITechnicalSupportFileViewModelReqDto }>(),
    "Load Technical Documents Success": props<{ documents: ITechnicalSupportFileViewModel[] }>(),
    "Load Technical Documents Failure": props<{ error: any }>(),

    /** Technical Documents - Mock 資料 */
    "Load Mock Technical Documents": emptyProps(),

    /** Technical File */
    "Load Technical File": emptyProps(),
  }
})
