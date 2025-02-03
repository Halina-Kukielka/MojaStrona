import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('imprintEnd') imprintEnd: ElementRef | undefined;
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  showImprint() {
    this.show = !this.show;

    console.log("showImprint");
    setTimeout(() => {
      // Your code to be executed after 0.1 second
      if(this.imprintEnd != undefined){
        this.imprintEnd.nativeElement.scrollIntoView({ block: 'start' });
      }
    }, 300); // 100 milliseconds (0.1 second)
  }

}
