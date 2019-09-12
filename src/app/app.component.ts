import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('header') header_container: ElementRef;
  @ViewChild('navHamburger') header_hamburger: ElementRef;
  public serviceArray = [
    {
      'service_name': 'Service Name',
      'service_icon': 'assets/images/about-service1.png'
    },
    {
      'service_name': 'Service Name',
      'service_icon': 'assets/images/about-service2.png'
    },
    {
      'service_name': 'Service Name',
      'service_icon': 'assets/images/about-service3.png'
    }];

  public testimonialsArray = [
    {
      'client_name': 'Client Name',
      'client_position': 'Position, ORG',
      'client_avatar': 'assets/images/default-avatar.png',
      'content': 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
    },
    {
      'client_name': 'Client Name',
      'client_position': 'Position, ORG',
      'client_avatar': 'assets/images/default-avatar.png',
      'content': 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
    },
    {
      'client_name': 'Client Name',
      'client_position': 'Position, ORG',
      'client_avatar': 'assets/images/default-avatar.png',
      'content': 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
    }];

  public socialLinkArray = [
    {
      'social_name': 'facebook',
      'social_icon': 'assets/images/facebook-icon.jpg'
    },
    {
      'social_name': 'linkedin',
      'social_icon': 'assets/images/linkedin-icon.png'
    },
    {
      'social_name': 'twitter',
      'social_icon': 'assets/images/twitter-icon.png'
    },
    {
      'social_name': 'gmail',
      'social_icon': 'assets/images/gmail-icon.png'
    }
  ];

  constructor() { }
  ngOnInit() {
    const nav_links = this.header_container.nativeElement.getElementsByClassName('nav-links');
    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < nav_links.length; i++) {
      nav_links[i].addEventListener('click', function () {
        const currentElement = document.getElementsByClassName('is-active');
        currentElement[0].className = currentElement[0].className.replace(' is-active', '');
        this.className += ' is-active';
      });
    }
  }

  sideNavClick() {
    if (this.header_container.nativeElement.classList.contains('is-expanded')) {
      this.header_container.nativeElement.classList.remove('is-expanded');
    } else {
      this.header_container.nativeElement.classList.add('is-expanded');
    }
  }

}
