import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomePageVideoComponent } from './home-page-video/home-page-video.component';
import { HomePageNewsComponent } from './home-page-news/home-page-news.component';
import { HomePageProductComponent } from './home-page-product/home-page-product.component';

@Component({
  selector: 'guangxun-home',
  standalone: true,
  imports: [CommonModule, HomePageVideoComponent, HomePageNewsComponent, HomePageProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
