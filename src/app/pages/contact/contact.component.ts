import { Component, OnInit } from '@angular/core';
import { SharedStandaloneImports } from '../../shared/shared-imports';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductType } from '../../models/interface/feature/product.interface';
import {
  CameraMainCategory,
  HostMainCategory,
  MonitorMainCategory,
  ProductType as ProductTypeEnum,
} from '../../models/enum/product.enum';
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
    { label: '主機', type: ProductTypeEnum.Host },
  ];
  productOptions: { label: string; value: string }[] = [];

  cameraMainCategories = Object.entries(CameraMainCategory).map(([key, value]) => ({
    label: key,
    value,
  }));

  hostMainCategories = Object.entries(HostMainCategory).map(([key, value]) => ({
    label: key,
    value,
  }));

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
        case ProductTypeEnum.Host:
          this.productOptions = this.hostMainCategories;
          break;
      }

      this.contactForm.get('product')?.setValue('');
    });
  }

  contactForm = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    productCategory: new FormControl<ProductTypeEnum | null>(null),
    product: new FormControl<string>(''),
  });

  onSubmit() {
    console.log('submit');
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
