import { Component, OnInit } from '@angular/core';
import { Drug } from '../../../shared/models/Drug';
import { DrugService } from '../../../services/drug.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,SearchComponent,TagsComponent,NotFoundComponent,StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  drugs:Drug[] =[];
  constructor(private drugService:DrugService, activatedRoute:ActivatedRoute) {
    let drugsObservable:Observable<Drug[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        drugsObservable = this.drugService.getAllDrugsBySearchTerm(params.searchTerm);
      else if(params.tag)
        drugsObservable = this.drugService.getAllDrugsByTag(params.tag);
      else
      drugsObservable = drugService.getAll();

      drugsObservable.subscribe((serverDrugs) => {
        this.drugs = serverDrugs;
      })
    })
    
  }

  ngOnInit(): void {
  }

}
