export interface ISeat {
	name: string;
	position: string;
	part: ERoleType;
	label: string;
	imageUrl: string;
	page: string;
}

export enum ESize {
	Large = 'LARGE',
	Medium = 'MEDIUM',
	Small = 'SMALL',
}

export enum ERoleType {
	Empty = 'Empty',
	Other = 'Other',
	Design = 'Design',
	Backend = 'Backend',
	Frontend = 'Frontend',
	Plan = 'Plan',
}
