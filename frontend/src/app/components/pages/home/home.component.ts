import { Component, OnInit } from '@angular/core';
import { Drug } from '../../../shared/models/Drug';
import { DrugService } from '../../../services/drug.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  drugs:Drug[] =[];
  constructor(private drugService:DrugService) {
    this.drugs = drugService.getAll();
  }

  ngOnInit(): void {
  }

}
