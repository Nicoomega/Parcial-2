import { Component, OnInit } from '@angular/core';
import { dataDinos } from './dataDinos';
import { Dino } from './dino';
@Component({
  selector: 'app-dino',
  templateUrl: './dino.component.html',
  styleUrls: ['./dino.component.css'],
})
export class DinoComponent implements OnInit {
  dinos: Array<Dino> = [];
  constructor() {}
  getDinoList(): Array<Dino> {
    return dataDinos;
  }
  ngOnInit() {
    this.dinos = this.getDinoList();
  }
}
