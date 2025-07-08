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
		const scriptId = "GoSaffeCaptureComponent";

		const initGoSaffe = () => {
			if (window.GoSaffe) {
				window.GoSaffe.init(
					props.captureKey,
					props.user,
					props.endToEndId,
					props.type,
          parseExtraData(props.extraData),
				);
			}
		};

		let script: HTMLScriptElement | null = document.getElementById(
			scriptId,
		) as HTMLScriptElement;

		if (!script) {
			script = document.createElement("script");
			script.id = scriptId;
			script.src = "https://go.saffe.ai/cdn/latest";
			script.onload = initGoSaffe;
			document.body.appendChild(script);
		} else {
			initGoSaffe();
		}

		return () => {
			const existingScript = document.getElementById(scriptId);
			if (existingScript) {
				existingScript.remove();
			}
		};
	}, [props.captureKey, props.user, props.endToEndId, props.type]);

	return <div />;
};
