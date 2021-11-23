import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss'],
})
export class CharacterSearchComponent implements OnInit {

  // ==== Variables ====

  public query: string;
  public result: string = '';
  @Input() labelButton: string = '';
  public charactersSearch: any;
  public noName: string = '';
  public noId: string = '';
  public messageNoResults: string = '';
  public charname: string = '';
  public charid: string = '';

  constructor(private rickmortyService: RickMortyService) {
    this.query = '';
  }

  ngOnInit(): void {}

  searchByName(form: any) {
    if (form.valid) {
      this.rickmortyService.getCharactersByName(form.value).subscribe(
        (data) => {

          // Consigue los datos procediente de la Api.
          this.charactersSearch = data.results;
          this.messageNoResults = '';
        },
        (error) => {

          // No Consigue los datos procediente de la Api.
          this.charactersSearch = [];
          this.noName =
            'Consulta errónea. No se encontraron por el nombre.';
        }
      );
    }
  }

  // Buscar personaje por Id.
  searchById(form: any) {
    if (form.valid) {
      this.rickmortyService.getCharactersById(form.value).subscribe(
        (data) => {

          // Consigue los datos procediente de la Api.
          this.charactersSearch = [data];
          this.messageNoResults = '';
        },
        (error) => {
          // No Consigue los datos procediente de la Api.
          this.charactersSearch = [];
          this.noId =
            'Consulta errónea. No se encontraron por el id.';
        }
      );
    }
  }
}
