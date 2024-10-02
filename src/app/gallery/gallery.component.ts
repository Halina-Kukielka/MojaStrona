import { Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{
  images: string[] = [
    'assets/images/001.png',
    'assets/images/002.png',
    'assets/images/008.png',
    'assets/images/003.png',
    'assets/images/004.png',
    'assets/images/005.png',
    'assets/images/006.png',
    'assets/images/007.png',
    'assets/images/macbook.png'
  ];

  selectedIndex = 0;
 projectNames: string[] = [
  'Misercook.com'
 ];

  //projectDescriptions: string[] = [
 //   'myProjects.description_misercook'
  //;


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
