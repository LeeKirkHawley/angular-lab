import { PriceQuoterComponent } from './price.quoter.component';
import { Component, OnInit } from '@angular/core';
import { IPriceQuote } from './iprice.quote';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  priceQuote : IPriceQuote;

  priceQuoteHandler(event: IPriceQuote) {
    this.priceQuote = event;
  }
}
