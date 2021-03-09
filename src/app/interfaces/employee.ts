export interface Employee {
	[day: string]: any;
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
