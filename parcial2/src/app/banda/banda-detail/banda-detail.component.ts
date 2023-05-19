import { Component, OnInit, Input } from '@angular/core';
import { BandaDetail } from '../bandaDetail';

@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {

  @Input() bandaDetail!: BandaDetail;

  constructor() { }

  ngOnInit() {
  }

}
