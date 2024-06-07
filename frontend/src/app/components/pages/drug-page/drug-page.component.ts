import { Component, OnInit } from '@angular/core';
import { Drug } from '../../../shared/models/Drug';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DrugService } from '../../../services/drug.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drug-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './drug-page.component.html',
  styleUrl: './drug-page.component.css'
})
export class DrugPageComponent implements OnInit{
  drug!: Drug;
  constructor(activatedRoute:ActivatedRoute, drugService:DrugService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.drug = drugService.getDrugById(params.id);
    })
  }

  ngOnInit(): void {
    
  }

}
