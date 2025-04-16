import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomePageVideoComponent } from '../../feature/home-page-video/home-page-video.component';

@Component({
  selector: 'guangxun-home',
  standalone: true,
  imports: [CommonModule, HomePageVideoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
