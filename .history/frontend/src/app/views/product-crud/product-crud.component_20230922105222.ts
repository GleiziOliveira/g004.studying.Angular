import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: Hea) {
    headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "storefront",
      routeUrl: "/product",
    }
  }

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    console.log("A função navigateToProductCreate() foi chamada.")
    this.router.navigate(["/product/create"])
  }
}