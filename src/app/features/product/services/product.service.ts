import { Injectable } from '@angular/core';
import { ProductItem } from '../models/productList';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';
import { ProductDetails } from '../models/productDetails';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiUrl = `${environment.apiUrl}/products`;
//  private productItems: ProductItem[] = [{ id: 1, categoryId: 1, title: "Iphone 15 Pro", imgPath: "assets/img/images.png", description: "This is a phone", unitPrice: 1998 },
//   { id: 2, categoryId: 1, title: "Samsung Galaxy S24 Ultra", imgPath: "assets/img/images.png", description: "This is a phone", unitPrice: 1452 },
//   { id: 3, categoryId: 5, title: "Salcano Imsomnia", imgPath: "assets/img/images.png", description: "This is a cycle", unitPrice: 500 },
//   { id: 4, categoryId: 5, title: "Sedona 28-city-v", imgPath: "assets/img/images.png", description: "This is a cycle", unitPrice: 756 },
//   { id: 5, categoryId: 2, title: "Monster Abra A5 V16.1.3", imgPath: "assets/img/images.png", description: "This is a laptop", unitPrice: 3843 },
//   { id: 6, categoryId: 2, title: "Excalibur G770", imgPath: "assets/img/images.png", description: "This is a laptop", unitPrice: 4256 },
//   { id: 7, categoryId: 3, title: "Redmi Buds 5 Pro", imgPath: "assets/img/images.png", description: "This is an earphones", unitPrice: 67.99 },
//   { id: 8, categoryId: 4, title: "Xiaomi Mi Pro 4", imgPath: "assets/img/images.png", description: "This is a scooter", unitPrice: 879.99 },
//   { id: 9, categoryId: 4, title: "Onco OV-012", imgPath: "assets/img/images.png", description: "This is a scooter", unitPrice: 1236.99 },
//   { id: 10, categoryId: 6, title: "Triathlon T132", imgPath: "assets/img/images.png", description: "This is a skateboard", unitPrice: 250 },
//   { id: 11, categoryId: 6, title: "Delta 2", imgPath: "assets/img/images.png", description: "This is a skateboard", unitPrice: 320 },
//   { id: 12, categoryId: 3, title: "Airpods kulaklık", imgPath: "assets/img/images.png", description: "This is an earphones", unitPrice: 89.99 }
//   ];
  
  constructor(private http:HttpClient) { }
  
  getList(): Observable<ProductItem[]>{
  return this.http.get<ProductItem[]>(this
    .apiUrl).pipe(
    map((data)=>{
      for(const product of data){
        product.imageUrl='';
      }
      return data;
    })
  ); 
}
getById(id:number): Observable<ProductDetails>{
  return this.http.get<ProductDetails>(`${this.apiUrl}/products/${id}`)
}
}
