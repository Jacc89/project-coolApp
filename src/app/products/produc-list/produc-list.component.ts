
import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-produc-list',
  templateUrl: './produc-list.component.html',
  styleUrls: ['./produc-list.component.scss']
})
export class ProducListComponent implements OnInit {
  public products = [];

  constructor( private dataSvc: DataService) { }

  ngOnInit(): void {
    this.products = this.dataSvc.getAllProducts();
  }

}
