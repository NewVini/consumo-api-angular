import { Customer } from "../costumer.model";
import { Router, ActivatedRoute } from "@angular/router";
import { CostumerService } from "../costumer.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-costumer-update",
  templateUrl: "./costumer-update.component.html",
  styleUrls: ["./costumer-update.component.scss"],
})
export class CostumerUpdateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    city: new FormControl(''),
  })

  costumer: Customer[] = []
  constructor(
    private customerService: CostumerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    const idCostumer = this.route.snapshot.paramMap.get("id");
    const customerById: any = localStorage.getItem(`customer-${idCostumer}`)
    const arrayCustomer = JSON.parse(customerById)

    this.form.controls['id'].setValue(arrayCustomer[0].id)
    this.form.controls['id'].disable()
    this.form.controls['name'].setValue(arrayCustomer[0].name)
    this.form.controls['age'].setValue(arrayCustomer[0].age)
    this.form.controls['city'].setValue(arrayCustomer[0].city)
  }

  updateCostumer() {
    const customerNamer = this.form.controls['name'].value
    const idCostumer = this.route.snapshot.paramMap.get("id");
    this.customerService.update(this.form.value, idCostumer).subscribe(() => {
      this.customerService.showMessage(`Cliente ${customerNamer} atualizado com sucesso!`);
      this.router.navigate(["/costumers-list"]);
    });
  }

  cancel() {
    this.router.navigate(["/costumers-list"]);
  }
}