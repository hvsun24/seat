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

export enum ETotalRoleType {
	사업본부 = '사업본부',
	고객경험부문 = '고객경험부문',
	알앤디부문 = '알앤디부문',
	마케팅부문 = '마케팅부문',
	경영관리부문 = '경영관리부문',
	컨시어지사업부 = '컨시어지사업부',
	공석 = '공석',
}

export interface ITotalSeat {
	name: string;
	position: string;
	part: ETotalRoleType;
	label: string;
	imageUrl: string;
	page: string;
}
