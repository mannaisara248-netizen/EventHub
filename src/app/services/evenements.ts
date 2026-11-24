import { Injectable, signal } from '@angular/core';
import { Evenement } from '../modeles/evenement';
import { EVENEMENTS_INITIAUX } from '../donnees/evenements';

@Injectable({ providedIn: 'root' })
export class Evenements {
  private readonly _evenements = signal<Evenement[]>(EVENEMENTS_INITIAUX);
  readonly evenements = this._evenements.asReadonly();

  trouver(id: number): Evenement | undefined {
    return this._evenements().find((e) => e.id === id);
  }
}