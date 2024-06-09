import { Component, OnInit } from '@angular/core';
import { Drug } from '../../../shared/models/Drug';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DrugService } from '../../../services/drug.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-drug-page',
  standalone: true,
  imports: [CommonModule,RouterModule,NotFoundComponent],
  templateUrl: './drug-page.component.html',
  styleUrl: './drug-page.component.css'
})
export class DrugPageComponent implements OnInit{
  drug!: Drug;
  constructor(activatedRoute:ActivatedRoute, drugService:DrugService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        drugService.getDrugById(params.id).subscribe(serverDrug => {
          this.drug = serverDrug;
      });
    })
  }

  ngOnInit(): void { 
  }

  addToCart(){
    this.cartService.addToCart(this.drug);
    this.router.navigateByUrl('/cart-page');
  }

}
