import { Injectable } from '@angular/core';
import { Drug } from '../shared/models/Drug';
import { sample_drugs, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { Observable, sample } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DRUGS_BY_ID_URL, DRUGS_BY_SEARCH_URL, DRUGS_BY_TAG_URL, DRUGS_TAGS_URL, DRUGS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Drug[]>{
    return this.http.get<Drug[]>(DRUGS_URL);
  }

  getAllDrugsBySearchTerm(searchTerm:string) {
    return this.http.get<Drug[]>(DRUGS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(DRUGS_TAGS_URL);
  }

  getAllDrugsByTag(tag:string):Observable<Drug[]> {
    return tag ==="All"?
    this.getAll():
    this.http.get<Drug[]>(DRUGS_BY_TAG_URL + tag);
  }

  getDrugById(drugId:string):Observable<Drug>{
    return this.http.get<Drug>(DRUGS_BY_ID_URL + drugId)
  }
}
