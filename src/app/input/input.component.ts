import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({target}): void {
    this.stock = target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
