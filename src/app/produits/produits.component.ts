import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
  // providers
})
export class ProduitsComponent implements OnInit {
data: Produit[];
  constructor(private service: ProduitsService) { }

  ngOnInit() {
    this.service.getAll().subscribe(resp => this.data = resp);
  }

}
