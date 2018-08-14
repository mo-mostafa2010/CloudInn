import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'ng2-swapi';
import { of, observable } from 'rxjs';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [SwapiService]
})
export class CardComponent implements OnInit {
	public swapi: SwapiService;
  constructor() {
    	this.swapi.getPeople(3, true).subscribe(res => {}, err => {});
 }

  ngOnInit() {
  }

}
