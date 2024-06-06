import { Injectable } from '@angular/core';
import { Drug } from '../shared/models/Drug';
import { sample_drugs, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { sample } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor() { }

  getAll():Drug[]{
    return sample_drugs;
  }

  getAllDrugsBySearchTerm(searchTerm:string) {
    return this.getAll().filter(drug => drug.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags
  }

  getAllDrugsByTag(tag:string):Drug[] {
    return tag ==="All"?
    this.getAll():
    this.getAll().filter(drug => drug.tags?.includes(tag));
  }
}
