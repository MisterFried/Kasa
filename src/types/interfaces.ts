export interface HostingInterface {
	id: string;
	title: string;
	cover: string;
	pictures: Array<string>;
	description: string;
	host: {
		name: string;
		picture: string;
	};
	rating: string;
	location: string;
	equipments: Array<string>;
	tags: Array<string>;
}

export interface HostingPropsInterface {
	hosting: HostingInterface;
}

export interface DropdownPropsInterface {
	title: string;
	content: string | Array<string>;
}
