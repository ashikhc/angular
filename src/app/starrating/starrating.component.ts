import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.scss']
})
export class StarratingComponent implements OnChanges {

  constructor() { }
  ngOnChanges(): void 
  {
     //1 rating = 15 pixel. 5 rating= 75 pixel. 
     //if rating is 4 then,  4 * 75 / 5 = 60 pixels.  that is raing is (4). 
    this.cropwidth = this.rating * 75/5;  
  }

@Input() rating:number = 0;
cropwidth:number = 75;


  ngOnInit(): void {
    
  }

}
