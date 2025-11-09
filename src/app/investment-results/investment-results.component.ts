import { CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
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

  get results() {
    return this.investmentServicee.resultsData;
  }
}
