import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-costumer-crud',
  templateUrl: './costumer-crud.component.html',
  styleUrls: ['./costumer-crud.component.scss']
})
export class CostumerCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCreate() {
    this.router.navigate(['costumers-list'])
  }

}
