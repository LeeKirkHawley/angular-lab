import { PriceQuoterComponent } from './output/price.quoter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableExpandableRowsExample } from './table-expandable-rows-example/table-expandable-rows-example';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { OrderProcessorComponent } from './order/order.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    TableExpandableRowsExample,
    HomeComponent,
    InputComponent,
    OrderProcessorComponent,
    OutputComponent,
    PriceQuoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
