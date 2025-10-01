import { Component } from '@angular/core';

@Component({
  selector: 'app-image-galery',
  imports: [],
  templateUrl: './image-galery.html',
  styleUrl: './image-galery.scss'
})
export class ImageGalery {
  currentImage = 'https://placecats.com/neo/300/200';
  imageDescription = "Image de base";
  isLoading = false;
  isSelected = true;
  searchTerm = "";
  placeholderText = "Rechercher une image...";
}
