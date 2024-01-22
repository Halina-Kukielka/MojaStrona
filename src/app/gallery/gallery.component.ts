import { Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{
  images: string[] = ['assets/images/1.jpeg', 'assets/images/2.jpeg', 'assets/images/3.jpeg'];
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
