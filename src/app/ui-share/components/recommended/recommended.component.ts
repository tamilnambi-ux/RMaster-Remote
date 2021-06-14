import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {param} from 'jquery';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent  {
  @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;
  modalRef: BsModalRef;
subscribe=[];
showFilter = false;
favicon=[];
searchright = false;
public carditems = Array(16).fill([6]);
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private modalService: BsModalService) { }
  slides = [
    {
      name:'Default  Preference'
    },
    {
      name:'Default  Preference2'
    },
    {
      name:'Default  Preference3'
    },
    {
      name:'Default  Preference4'
    },
    {
      name:'Default  Preference5'
    },
    {
      name:'Default  Preference6'
    },
    {
      name:'Default  Preference7'
    },
    {
      name:'Default  Preference8'
    },
   
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    speed: 1500,
    // prevArrow: '<span class="material-icons material-icons-outlined">chevron_left </span>',
    // nextArrow: '<span class="material-icons material-icons-outlined">chevron_right </span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  _trackBy(slide) {
    return slide.name;
  }

  // addSlide() {
  //   this.slides.push({})
  // }


  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  // afterChange(slides, index) {
  //   this.slides.length = this.slides.length - 1;
  // }

  // ngOnInit() {
  // }

  openModalinfo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalshare(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalfavo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 
 
  
}

window.onload = function() {
  document.getElementById('searchright').focus();
}
