export interface ISeat {
	name: string;
	position: string;
	part: ERoleType;
	label: string;
	web: string;
	page: string;
}

export enum ERoleType {
	Empty = 'Empty',
	Other = 'Other',
	Design = 'Design',
	Backend = 'Backend',
	Frontend = 'Frontend',
	Plan = 'Planner',
}
