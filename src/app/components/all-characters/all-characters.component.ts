import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent implements OnInit {

  // Variables inicializada donde guardaremos datos de Api.
  public characters: any[] = [];
  public messageNoResults: string = '';

  constructor(private charactersService: RickMortyService) {}

  ngOnInit(): void {
    this.messageNoResults = '';
    this.charactersService.getCharacters().subscribe(
      (data) => {
        // Si consigue traer los datos.
        this.characters = data.results;
        this.messageNoResults = '';
      },
      (error) => {
        // NO consigue traer los datos.
        this.characters = [];
        this.messageNoResults =
          'Consulta errónea. No se encontraron resultados';
      }
    );
  }
}
