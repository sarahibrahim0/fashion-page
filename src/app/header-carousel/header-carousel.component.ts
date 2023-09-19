import { Component, OnInit } from '@angular/core';
import { Carousel, initTE } from 'tw-elements';

@Component({
  selector: 'app-header-carousel',
  templateUrl: './header-carousel.component.html',
  styleUrls: ['./header-carousel.component.css']
})
export class HeaderCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    initTE({ Carousel });

  }

}
