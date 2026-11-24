import { Component, input } from '@angular/core';
import { Categorie } from '../../modeles/evenement';

@Component({
  selector: 'app-badge-categorie',
  styleUrl: './badge-categorie.css',
  templateUrl: './badge-categorie.html',
})
export class BadgeCategorie {
  readonly categorie = input.required<Categorie>();
}
