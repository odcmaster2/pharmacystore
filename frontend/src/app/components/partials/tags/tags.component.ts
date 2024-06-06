import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { DrugService } from '../../../services/drug.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(drugService:DrugService) {
    this.tags=drugService.getAllTags();
  }

  ngOnInit(): void {
    
  }
}
