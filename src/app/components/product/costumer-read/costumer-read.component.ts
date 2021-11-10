import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Customer } from '../costumer.model';
import { CostumerService } from '../costumer.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-costumer-read',
  templateUrl: './costumer-read.component.html',
  styleUrls: ['./costumer-read.component.scss']
})
export class CostumerReadComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  customers: Customer[] = []
  displayedColumns: string[] = ['id', 'name', 'age', 'city', 'actions'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dados: [] = []
  ELEMENT_DATA: Customer[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  form: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]),
    name: new FormControl(null),
    age: new FormControl(null),
    city: new FormControl(null),
  })


  constructor(
    private costumertService: CostumerService
  ) { }

  ngOnInit(): void {
    this.loadCustomers()
  }

  loadCustomers() {
    this.costumertService.read().subscribe(res => {
      this.dataSource.data = res
      this.customers = res
      console.log(res)

      localStorage.setItem('allCustomers', JSON.stringify(res))
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
  }

  saveById(idCustomer: number) {

    const filterById = this.dataSource.data.filter(obj => obj.id === idCustomer)
    localStorage.setItem(`customer-${idCustomer}`, JSON.stringify(filterById))
  }

  filtrar() {
    const idForm = this.form.controls['id'].value
    const nameForm = this.form.controls['name'].value
    const ageForm = this.form.controls['age'].value
    const cityForm = this.form.controls['city'].value

    const allCustomers: any = localStorage.getItem('allCustomers')
    const customersArray = JSON.parse(allCustomers)
    this.dataSource.data = customersArray

    const dadosFiltrados = this.dataSource.data.find(obj => obj.id == idForm || obj.name == nameForm || obj.age == ageForm || obj.city == cityForm)
    console.log(dadosFiltrados)
    this.dataSource.data = [dadosFiltrados]

    if (this.dataSource.data[0] == undefined) {
      this.costumertService.showMessage("Cliente não encontrado !");
      this.dataSource.data = customersArray
    }
  }

}
