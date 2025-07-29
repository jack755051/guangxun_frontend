import { Component, inject, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductType } from '../../models/interface/feature/product.interface';
import {
  CameraTypeCategory,
  HostMainCategory,
  ProductType as ProductTypeEnum,
} from '../../models/enum/product.enum';
import { DialogService, DialogType } from '../../components/dialog';
import { DialogButtonType } from '../../components/dialog/model/enum/dialog-button-dialog.enum';
import { ApiService } from '../../apis/contact/api.service';
import { IContactReqDto } from '../../apis/contact/req.dto';
@Component({
  selector: 'guangxun-contact',
  imports: [ReactiveFormsModule, SharedStandaloneImports],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  productTypes: ProductType[] = [
    { label: '攝影機', type: ProductTypeEnum.Camera },
    { label: '主機', type: ProductTypeEnum.Recorder },
    { label: '顯示器', type: ProductTypeEnum.Display },
    { label: '配件', type: ProductTypeEnum.Accessory },
  ];
  productOptions: { label: string; value: string }[] = [];

  cameraMainCategories = Object.entries(CameraTypeCategory).map(([key, value]) => ({
    label: key,
    value,
  }));

  hostMainCategories = Object.entries(HostMainCategory).map(([key, value]) => ({
    label: key,
    value,
  }));

  dialog = inject(DialogService);
  private readonly apiService = inject(ApiService);

  constructor() {}

  ngOnInit(): void {
    this.contactForm.get('productCategory')?.valueChanges.subscribe((category) => {
      if (!category) {
        this.productOptions = [];
        return;
      }

      switch (category) {
        case ProductTypeEnum.Camera:
          this.productOptions = this.cameraMainCategories;
          break;
        case ProductTypeEnum.Recorder:
          this.productOptions = this.hostMainCategories;
          break;
      }

      this.contactForm.get('product')?.setValue('');
    });
  }

  contactForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern(/^(?![\W_]+$).+$/),
    ]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^09\d{8}$/),
    ]),
    productCategory: new FormControl<ProductTypeEnum | null>(null, [Validators.required]),
    product: new FormControl<string>('', [Validators.required]),
  });

  onSubmit() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      const formData: IContactReqDto = {
        name: this.contactForm.value.name!,
        email: this.contactForm.value.email!,
        phone: this.contactForm.value.phone!,
        productCategory: this.contactForm.value.productCategory!,
        product: this.contactForm.value.product!,
      };

      this.apiService.sendContactForm(formData).subscribe({
        next: (response) => {
          console.log('聯絡表單發送成功:', response);

          this.dialog.openRemindDialog({
            type: DialogType.ALERT,
            header: {
              title: '發送成功',
            },
            content: {
              type: 'text',
              text: response.message || '您的聯絡訊息已成功發送，我們會盡快與您聯繫。',
            },
            footer: {
              buttons: [{ type: DialogButtonType.CANCEL, label: '關閉' }],
            },
            width: '500px',
            height: 'auto',
            panelClass: 'dialog-remind-style',
          });

          // 清空表單
          this.onClear();
        },
        error: (error) => {
          console.error('聯絡表單發送失敗:', error);

          this.dialog.openRemindDialog({
            type: DialogType.ALERT,
            header: {
              title: '發送失敗',
            },
            content: {
              type: 'text',
              text: '發送過程中發生錯誤，請稍後再試或直接聯繫我們。',
            },
            footer: {
              buttons: [{ type: DialogButtonType.CANCEL, label: '關閉' }],
            },
            width: '500px',
            height: 'auto',
            panelClass: 'dialog-remind-style',
          });
        }
      });

    } else {
      console.log('表單驗證失敗');
      const errors = this.getFormErrors();
      let errorMessage = '請檢查以下欄位：\n';

      Object.keys(errors).forEach(key => {
        const fieldName = this.getFieldDisplayName(key);
        errorMessage += `• ${fieldName}\n`;
      });

      this.dialog.openRemindDialog({
        type: DialogType.ALERT,
        header: {
          title: '表單驗證錯誤',
        },
        content: {
          type: 'text',
          text: errorMessage,
        },
        footer: {
          buttons: [{ type: DialogButtonType.CANCEL, label: '關閉' }],
        },
        width: '500px',
        height: 'auto',
        panelClass: 'dialog-remind-style',
      });
    }
  }

  // 獲取表單錯誤的輔助方法
  private getFormErrors(): any {
    const errors: any = {};
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      if (control && control.errors) {
        errors[key] = control.errors;
      }
    });
    return errors;
  }

  // 獲取欄位顯示名稱的輔助方法
  private getFieldDisplayName(fieldName: string): string {
    const fieldNames: { [key: string]: string } = {
      'name': '稱呼',
      'email': '電子郵件',
      'phone': '電話',
      'productCategory': '產品類別',
      'product': '產品項目'
    };
    return fieldNames[fieldName] || fieldName;
  }

  onClear() {
    this.contactForm.reset({
      name: '',
      email: '',
      phone: '',
      productCategory: null,
      product: '',
    });
  }
}
