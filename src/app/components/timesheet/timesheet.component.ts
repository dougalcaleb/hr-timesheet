import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/interfaces/department';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
   selector: 'app-timesheet',
   templateUrl: './timesheet.component.html',
   styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
   departments: Department[] = [];
   department: any;

   constructor(
      private route: ActivatedRoute, private departmetsService: DepartmentsService
   ) { }

   ngOnInit(): void {
      this.departments = this.departmetsService.departments;
      this.department = this.departments.find(d => d.id === this.route.snapshot.params["id"]);
   }
}
