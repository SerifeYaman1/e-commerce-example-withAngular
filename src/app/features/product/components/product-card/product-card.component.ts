import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItem } from '../../models/productList';
import { CardComponent } from "../../../../shared/card/card.component";
import { ProductService } from '../../services/product.service';
import { error } from 'console';


@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CardComponent
  ]
})
export class ProductCardComponent implements OnInit {
  @Input() filterByCategoryId: number | null | undefined;
  @Output() viewProduct = new EventEmitter<ProductItem>();

  productItems!: ProductItem[];
  
  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
  this.productService.getList().subscribe({
    next:(productItems) => {
      this.productItems = productItems;
    },
    error:(error) =>{
      console.error("there was an error"), error
    },
  });
}

  OnViewInformation(item:ProductItem) {
    this.viewProduct.emit(item);
  }
}

