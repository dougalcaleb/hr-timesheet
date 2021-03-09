export interface Employee {
   [day: string]: any;  // fixes type error in timesheet.component.html. 
                        // ts knows that the ngfor could pass any string and it could potentially be undefined, so this says accept anything from prop=day
                        // of course because we are controlling it, it won't be undefined here, so we're good in this case
	id: string;
	departmentId: string;
	name: string;
	payRate: number;

	monday: number;
	tuesday: number;
	wednesday: number;
	thursday: number;
	friday: number;
	saturday: number;
	sunday: number;
}
