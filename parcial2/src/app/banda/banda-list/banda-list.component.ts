import { Component, OnInit } from '@angular/core';
import { BandaDetail } from '../bandaDetail';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<BandaDetail> = [];

  viejaName: string="";
  viejaAño: number=2050;
  tiempo: number = 0;

  selectedBanda!: BandaDetail;
  selected: Boolean = false;

  constructor(private bandaService: BandaService) { }

  getBandas(): void{
    this.bandaService.getBandas().subscribe(banda =>{
      this.bandas=banda;
    });
  }

  getViejo(): void{
    this.bandaService.getBandas().subscribe(banda =>{
      banda.forEach(bandaI => { if(bandaI.foundation_year<this.viejaAño){
        this.viejaName=bandaI.name;
        this.viejaAño=bandaI.foundation_year;
      }});
        this.tiempo=2023-this.viejaAño;
    });
  }

  onSelected(banda: BandaDetail): void{
    this.selected =true;
    this.selectedBanda = banda;
  }
  ngOnInit() {
    this.getBandas();
    this.getViejo();
  }

}
