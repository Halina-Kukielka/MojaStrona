import {Component} from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    images: string[] = [
        'assets/images/001.png',
        'assets/images/002.png',
        'assets/images/003.png'
    ];

    selectedIndex = 0;
    projectNames: string[] = [
        'project.misercook',
        'project.weatherApp',
        'project.architect'

    ];

    projectDescriptions: string[] = [
        'project.desc1',
        'project.desc2',
        'project.desc3'
    ];

    projectLinks: string[] = [
        'https://misercook.com',
        'https://weather.kukielka.net',
        'https://architectsoffice.kukielka.net'
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
