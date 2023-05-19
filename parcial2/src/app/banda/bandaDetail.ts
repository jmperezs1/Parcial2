import { Banda } from "./banda";

export class BandaDetail extends Banda {
  image: string;
  description: string;

  constructor(id: number, name:string, country:string, genre: string, foundation_year: number, image: string, description: string){
    super(id,name,country,genre,foundation_year);
    this.image=image;
    this.description=description;
  }
}
