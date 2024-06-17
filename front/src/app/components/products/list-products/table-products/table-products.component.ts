
import { Component } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../models/products';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-table-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})
export class TableProductsComponent {
  public products:Product[]=[];
authService: any;

  private loadProducts(){
    this.productsService.getProducts().subscribe((data)=>{
      this.products=data;
    });
  }

  constructor (private productsService:ProductsService){
    this.loadProducts();
  }

  public deleteProduct(id:number){
    this.productsService.deleteProduct(id).subscribe((data)=>{
      this.loadProducts();
    });

  }



}
