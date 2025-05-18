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
    phone: new FormControl<string>('', [Validators.required]),
    productCategory: new FormControl<ProductTypeEnum | null>(null, [
      Validators.required,
      Validators.pattern(/^09\d{8}$/),
    ]),
    product: new FormControl<string>('', [Validators.required]),
  });

  onSubmit() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      console.log('submit');
    } else {
      console.log('error');
      this.dialog.openRemindDialog({
        type: DialogType.ALERT,
        header: {
          title: '錯誤',
        },
        content: {
          type: 'text',
          text: '請檢查表單是否填寫完整',
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
