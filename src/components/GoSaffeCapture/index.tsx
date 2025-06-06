import React, { useEffect } from "react";

interface InitFunc {
	init(apiKey: string, user: string, endToEndId: string, type: string): any;
}

interface Props {
	captureKey: string;
	user: string;
	endToEndId: string;
	type: "verification" | "onboarding";
}

declare global {
	interface Window {
		GoSaffe: InitFunc;
	}
}

export const CaptureComponent = (props: Props) => {
	useEffect(() => {
		const scriptId = "GoSaffeCaptureComponent";

		const initGoSaffe = () => {
			if (window.GoSaffe) {
				window.GoSaffe.init(
					props.captureKey,
					props.user,
					props.endToEndId,
					props.type,
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
