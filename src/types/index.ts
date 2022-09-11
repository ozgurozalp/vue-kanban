export interface Section {
	id: string;
	sectionName: string;
	tasks: Task[];
	order: number;
}

export interface Task {
	id: string;
	title: string;
	description: string;
	date: string;
	isFavorite: boolean;
	favoriteCount: number;
	status: {
		text: string;
		color: string;
	};
}
