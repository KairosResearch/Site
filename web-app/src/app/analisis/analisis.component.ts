import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent {

  constructor(private router: Router) {}

  ngOnInit() {
    // fromEvent(window, 'scroll').subscribe(() => {
    //   if (window.scrollY === 0) {
    //     this.router.navigate(['']);
    //   }
    //   // if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //   //   this.router.navigate(['/partners']);
    //   // }
    // });
  }
  
}
