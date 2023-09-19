import { Component, OnInit } from '@angular/core';
import { Carousel, initTE } from 'tw-elements';


@Component({
  selector: 'app-sec-carousel',
  templateUrl: './sec-carousel.component.html',
  styleUrls: ['./sec-carousel.component.css']
})
export class SecCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    initTE({ Carousel });

  }

}
