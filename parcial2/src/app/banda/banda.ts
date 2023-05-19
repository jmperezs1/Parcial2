export class Banda {
  id: number;
  name: string;
  country: string;
  genre: string;
  foundation_year: number;

  constructor(id: number, name:string, country:string, genre: string, foundation_year: number){
    this.id=id;
    this.name = name;
    this.country = country;
    this.genre = genre;
    this.foundation_year=foundation_year;
  }
}
