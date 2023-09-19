import { Component, OnInit } from '@angular/core';
import { Carousel, initTE } from 'tw-elements';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    initTE({ Carousel });

  }

}
