import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomePageVideoComponent } from './home-page-video/home-page-video.component';
import { HomePageNewsComponent } from './home-page-news/home-page-news.component';

@Component({
  selector: 'guangxun-home',
  standalone: true,
  imports: [CommonModule, HomePageVideoComponent, HomePageNewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
