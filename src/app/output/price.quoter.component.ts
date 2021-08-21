// from Angular Development With Typescript chapter 8

import {Component, Output, EventEmitter}  from '@angular/core';
import { interval } from 'rxjs';
import { IPriceQuote } from './iprice.quote';

@Component({
    selector: 'price-quoter',
    template: `<strong>Inside PriceQuoterComponent:
                    {{priceQuote?.stockSymbol}}
                    {{priceQuote?.lastPrice | currency: 'USD'}}</strong>`,
    styles: [`:host {background: pink;}`]
})
export class PriceQuoterComponent {
    @Output() lastPrice = new EventEmitter<IPriceQuote>();

    priceQuote : IPriceQuote;

    constructor() {
        interval(2000)
            .subscribe(data => {
                this.priceQuote = {
                    stockSymbol: "IBM",
                    lastPrice: 100 * Math.random()
                };

                this.lastPrice.emit(this.priceQuote);
            })
    }   
}