import React, { useEffect } from "react";
import { ExtraData, ExtraDataDTO, InitFunc, Props } from "./interfaces";

declare global {
	interface Window {
		GoSaffe: InitFunc;
	}
}

export const CaptureComponent = (props: Props) => {
	const parseExtraData = (extraData: ExtraData): ExtraDataDTO => {
		const extraDataDTO: ExtraDataDTO = {};

		if (extraData.settings) {
			extraDataDTO.settings = {
				primary_color: extraData.settings.primaryColor,
				secondary_color: extraData.settings.secondaryColor,
				lang: extraData.settings.lang,
			};
		}

		if (extraData.sendResultsTo) {
			extraDataDTO.send_results_to = {
				media: extraData.sendResultsTo.media,
				email: extraData.sendResultsTo.email,
			};
		}

		return extraDataDTO;
	};

	useEffect(() => {
		if (window && document) {
			const existScript = document.getElementById("GoSaffeCaptureComponent");

			if (!existScript) {
				const script = document.createElement("script");
				script.id = "GoSaffeCaptureComponent";
				script.src = "https://go.saffe.ai/cdn/latest";

				const body = document.getElementsByTagName("body")[0];
				body.appendChild(script);

				script.addEventListener("load", () => {
					window.GoSaffe.init(
						props.captureKey,
						props.user,
						props.endToEndId,
						props.type,
						parseExtraData(props.extraData),
					);
				});
			}
		}
	}, []);

	return <div />;
};
