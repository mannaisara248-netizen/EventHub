import { Component, computed, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Evenement } from '../../modeles/evenement';
import { BadgeCategorie } from '../badge-categorie/badge-categorie';

@Component({
  imports: [DatePipe, BadgeCategorie],
  selector: 'app-carte-evenement',
  styleUrl: './carte-evenement.css',
  templateUrl: './carte-evenement.html',
})
export class CarteEvenement {
  readonly evenement = input.required<Evenement>();
  readonly favori = output<Evenement>();
  readonly termine = computed(() => this.evenement().date < new Date());

  ajouterAuxFavoris(): void {
    this.favori.emit(this.evenement());
  }
}