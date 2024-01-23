import { Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{
  images: string[] = ['assets/images/1.png', 'assets/images/2.png', 'assets/images/3.png', 'assets/images/4.png'];
  selectedIndex = 0;

  nextImage() {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
  }

  prevImage() {
    this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
