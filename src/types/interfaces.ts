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
	rating: number;
	location: string;
	equipments: Array<string>;
	tags: Array<string>;
}

export interface HostingPropsInterface {
	hosting: HostingInterface;
}
