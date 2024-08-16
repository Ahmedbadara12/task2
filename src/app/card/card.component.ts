import { resolve } from 'node:path';
import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { NgFor, NgIf } from '@angular/common';
import { IDataApi } from '../idata-api';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {


  constructor(private _apiService: ApiDataService) {}
  dataApi: IDataApi[] = [];
  ngOnInit(): void {
    this._apiService.getData().subscribe({
      next: (res) => {
        this.dataApi = res;
        console.log(this.dataApi);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
