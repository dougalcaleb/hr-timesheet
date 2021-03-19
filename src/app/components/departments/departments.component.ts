import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from 'src/app/interfaces/department';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

   departments: Department[] = [];
   $departments: any;

   constructor(private departmentsService: DepartmentsService, private router: Router) {
     
  }

   goToDepartment(departmentId: string): void {
      this.router.navigate(["./timesheet", { id: departmentId }]);
   }
   ngOnInit(): void {
      // this.departmentsService.getDepartments().subscribe((departments) => {
      //    this.departments = departments;
      // });
      this.$departments = this.departmentsService.getDepartments();
  }
}
