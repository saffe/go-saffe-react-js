import React, { useEffect } from "react";
import { CaptureComponent } from "./components/GoSaffeCapture";
import { ExtraData } from "./components/GoSaffeCapture/interfaces";

interface Props {
	captureKey: string;
	user: string;
	endToEndId: string;
	type: "verification" | "onboarding";
	onClose: () => void;
	onFinish: () => void;
	onTimeout: () => void;
	extraData?: ExtraData;
}

interface CaptureEventMessage {
	data: {
		source: string;
		payload: {
			event: string;
		};
	};
}

export const GoSaffeCapture = (props: Props) => {
	useEffect(() => {
		window.addEventListener("message", (e: CaptureEventMessage) => {
			if (e.data.source === "go-saffe-capture") {
				switch (e.data.payload.event) {
					case "close":
						return props.onClose();
					case "finish":
						return props.onFinish();
					case "timeout":
						return props.onTimeout();
				}
			}
		});
	}, []);

	return (
		<React.StrictMode>
			<CaptureComponent
				captureKey={props.captureKey}
				endToEndId={props.endToEndId}
				type={props.type}
				user={props.user}
				extraData={props.extraData || {}}
			/>
		</React.StrictMode>
	);
};
