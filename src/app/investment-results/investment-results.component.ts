import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe], // Configurata in euro (HTML)
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  investmentServicee = inject(InvestmentService);
  // results = this.investmentServicee.resultsData; ERR

  results = computed(() => this.investmentServicee.resultsData()); // computed per evitare di manipolare dati del signal i quali sono gestiti esclusivamente dal servizio (computed rende il segnale readOnly);
  // alternativa metodo computed
  // retults = this.investmentServicee.resultsData.asReadonly();
}
