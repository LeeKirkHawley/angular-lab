import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order-processor',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderProcessorComponent implements OnInit {

    @Input() stockSymbol: string;
    @Input() quantity: number;

    ngOnInit() {

    }
}
