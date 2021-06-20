import { Component,ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild("header") header: HTMLElement;

  slidesOptions = {
    slidesPerView: 3.2,
    spaceBetween: 5,
    freeMode: true
  };

 
  

  constructor(
    public element: ElementRef, 
    public renderer: Renderer2
   ) {
  }
 
  ionViewWillEnter() {
    this.renderer.setStyle(this.header['el'], 'webkitTransition', 'top 700ms');
  }

  onContentScroll(event) {
    if (event.detail.scrollTop >= 50) {
      this.renderer.setStyle(this.header['el'], 'top', '-16px');
    } else {
      this.renderer.setStyle(this.header['el'], 'top', '0px');
    }
  }

}
