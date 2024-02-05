import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  
  public employee: { id: number; name: string; age: number; }[] = [];
  public errormsg:string='';

  constructor(private _employeeservice : EmployeeService) { }

  ngOnInit(): void {
    //this.employee = this._employeeservice.getEmp();
    this._employeeservice.getEmp()
      .subscribe(data => this.employee = data,
                error => this.errormsg = error);
                

  }

}
