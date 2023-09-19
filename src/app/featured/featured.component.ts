import { Component, OnInit } from '@angular/core';
import { Carousel,  initTE } from 'tw-elements';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    initTE({ Carousel });

  }

}
