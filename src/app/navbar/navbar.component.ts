import { DOCUMENT } from '@angular/common';
import { Component,  OnInit , Inject ,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Carousel, initTE } from 'tw-elements';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  navbarChange : boolean = false

  play: boolean = true
  pause: boolean = false


  videoSource = "../../assets/background.mp4"

  @ViewChild("bgVideo")  bgVideo: ElementRef;



  toggleIcon(){
    if(!this.play)
    {
      this.play = true;
      this.pause = false;
      this.bgVideo.nativeElement.play()
      console.log(this.bgVideo.nativeElement + 'play' )


    }
    else if(this.play)
    {
      this.play = false;
      this.pause = true;
      this.bgVideo.nativeElement.pause()



    }

  }


  constructor(@Inject(DOCUMENT) private document : Document) {


  }

  ngOnInit(): void {


    initTE({ Carousel });

    fromEvent(window, 'scroll').subscribe((event)=>
    {
    if (this.document.defaultView){
      if(this.document.defaultView.scrollY>0)
      {
    this.navbarChange = true
    // console.log('true')}
      }
    else if(this.document.defaultView.scrollY<1)
    {
      this.navbarChange = false
      // console.log(`false${this.navbarChange}`)
    }
    }

    })
  }

}
