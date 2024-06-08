import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{
  @Input()
  visible = false;

  @Input()
  notFoundMessage = "Nothing Found";

  @Input()
  resetLinkText = "Reset";

  @Input()
  resetLinkRoute = "/";

  constructor(){}

  ngOnInit(): void {
  }

}
