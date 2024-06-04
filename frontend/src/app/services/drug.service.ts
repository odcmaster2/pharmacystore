import { Injectable } from '@angular/core';
import { Drug } from '../shared/models/Drug';
import { sample_drugs } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor() { }

  getAll():Drug[]{
    return sample_drugs;
  }
}
