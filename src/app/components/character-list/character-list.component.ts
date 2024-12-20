import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }
}