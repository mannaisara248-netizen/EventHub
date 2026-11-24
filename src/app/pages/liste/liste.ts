import { Component, inject, signal } from '@angular/core';
import { Evenements } from '../../services/evenements';
import { Evenement } from '../../modeles/evenement';
import { CarteEvenement } from '../../composants/carte-evenement/carte-evenement';

@Component({
  selector: 'app-liste',
  imports: [CarteEvenement],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste {
  private readonly service = inject(Evenements);
  readonly evenements = this.service.evenements;

  readonly favoris = signal<number[]>([]);

  ajouterFavori(evenement: Evenement): void {
    this.favoris.update((ids) =>
      ids.includes(evenement.id) ? ids : [...ids, evenement.id],
    );
  }
}