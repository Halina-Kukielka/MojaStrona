import {Component} from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    images: string[] = [
        'assets/images/001.png',
        'assets/images/002.png'
    ];

    selectedIndex = 0;
    projectNames: string[] = [
        'project.misercook',
        'project.weatherApp'

    ];

    projectDescriptions: string[] = [
        'project.desc1',
        'project.desc2'
    ];

    projectLinks: string[] = [
        'https://misercook.com', // Link do pierwszego projektu
        'https://weather.kukielka.net' // Link do drugiego projektu
    ];


    nextImage() {
        this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    }

    prevImage() {
        this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
