export interface Settings {
	primaryColor?: string;
	secondaryColor?: string;
	lang?: string;
}

export interface SendResultsTo {
	media: string;
	email: string;
}

export interface ExtraData {
	settings?: Settings;
	sendResultsTo?: SendResultsTo;
}

export interface InitFunc {
	init(
		apiKey: string,
		user: string,
		endToEndId: string,
		type: string,
		extraData?: ExtraData,
	): any;
}

export interface Props {
	captureKey: string;
	user: string;
	endToEndId: string;
	type: "verification" | "onboarding";
	extraData: ExtraData;
}

export interface ExtraDataDTO {
	settings?: {
		primary_color?: string;
		secondary_color?: string;
		lang?: string;
	};
	send_results_to?: {
		media: string;
		email: string;
	};
}
