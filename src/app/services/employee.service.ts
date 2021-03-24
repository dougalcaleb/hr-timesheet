import {Injectable} from "@angular/core";
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Employee} from "../interfaces/employee";
import {map} from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class EmployeeService {
	constructor(private db: AngularFirestore) {}

	saveEmployeeHours(employee: Employee): any {
		this.db.collection("employee-hours").add(employee);
	}

	getEmpHoursByDep(departmentId: string): Observable<Employee[]> {
		const filteredEmployees = this.db.collection("employee-hours", (ref) => ref.where("departmentId", "==", departmentId));
		return filteredEmployees.snapshotChanges().pipe(
			map((items: DocumentChangeAction<Employee | any>[]): Employee[] => {
				return items.map(
					(item: DocumentChangeAction<Employee | any>): Employee => {
						return {
							id: item.payload.doc.id,
							departmentId,
							name: item.payload.doc.data().name,
							payRate: item.payload.doc.data().payRate,
							monday: item.payload.doc.data().monday,
							tuesday: item.payload.doc.data().tuesday,
							wednesday: item.payload.doc.data().wednesday,
							thursday: item.payload.doc.data().thursday,
							friday: item.payload.doc.data().friday,
							saturday: item.payload.doc.data().saturday,
							sunday: item.payload.doc.data().sunday,
						};
					}
				);
			})
		);
   }
   
   updateEmpHours(employee: Employee): any {
      this.db.collection("employee-hours").doc(employee.id).set(employee);
   }

   deleteEmpHours(employee: Employee): any {
      this.db.collection("employee-hours").doc(employee.id).delete();
   }
}
