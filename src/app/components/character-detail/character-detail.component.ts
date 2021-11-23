import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  // ==== Variables ====

  character: any = null;
  messageNoResults: string = '';

  constructor(
    private route: ActivatedRoute,
    private rickmortyService: RickMortyService
  ) {}

  ngOnInit(): void {
    this.messageNoResults = '';
    const id: string = this.route.snapshot.paramMap.get('id') as string;
    this.rickmortyService.getCharactersById(id).subscribe(
      (data) => {
        // Si obtiene datos de la Api.
        this.character = data;
        this.messageNoResults = '';
      },
      (error) => {
        // No obtiene datos de la Api.
        this.character = null;
        this.messageNoResults =
          'Consulta errónea. No se encontraron resultados';
      }
    );
  }

}
