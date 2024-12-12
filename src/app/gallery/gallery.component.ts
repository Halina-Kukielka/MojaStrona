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
        'assets/images/008.png',
        'assets/images/003.png',
        'assets/images/005.png',
        'assets/images/006.png',
        'assets/images/007.png',
        'assets/images/009.png',
        'assets/images/011.png'
    ];

    selectedIndex = 0;
    projectNames: string[] = [
        'project.platform',
        'project.startPage',
        'project.recDetail',
        'project.categories',
        'project.createRec',
        'project.shoppingList',
        'project.portaladmin',
        'project.chat',
        'project.weatherApp'

    ];

    projectDescriptions: string[] = [
        'project.desc1',
        'project.desc2',
        'project.desc3',
        'project.desc4',
        'project.desc5',
        'project.desc6',
        'project.desc7',
        'project.desc8',
        'project.desc9'
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
