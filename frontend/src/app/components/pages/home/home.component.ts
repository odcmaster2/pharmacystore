import { Component, OnInit } from '@angular/core';
import { Drug } from '../../../shared/models/Drug';
import { DrugService } from '../../../services/drug.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../partials/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  drugs:Drug[] =[];
  constructor(private drugService:DrugService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.drugs = this.drugService.getAllDrugsBySearchTerm(params.searchTerm);
      else
      this.drugs = drugService.getAll();
    })
    
  }

  ngOnInit(): void {
  }

}
