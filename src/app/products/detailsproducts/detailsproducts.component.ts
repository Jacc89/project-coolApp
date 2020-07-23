
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../shared/data.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-detailsproducts',
  templateUrl: './detailsproducts.component.html',
  styleUrls: ['./detailsproducts.component.scss']
})
export class DetailsproductsComponent implements OnInit {

  public product: any = {};



  constructor(
    private route: ActivatedRoute,
    private dataSvc: DataService,
    private location: Location
    ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.dataSvc.getProductById(productId);
    console.log('ProductId', productId);
  }

  onGoBack(): void {
    this.location.back();
  }

}
