import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) {}

  ngOnInit() {
    // fromEvent(window, 'scroll').subscribe(() => {
    //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //     this.router.navigate(['/analisis']);
    //   }
    // });
  }

}
