export interface Settings {
  primaryColor?: string;
  secondaryColor?: string;
  lang?: string;
}

export interface ResultNotification {
  media: string;
  email: string;
}

export interface ExtraData {
  settings?: Settings;
  resultNotification?: ResultNotification;
}

export interface InitFunc {
  init(apiKey: string, user: string, endToEndId: string, type: string, extraData?: ExtraData): any
}

export interface Props {
  captureKey: string;
  user: string;
  endToEndId: string;
  type: 'verification' | 'onboarding';
  extraData?: ExtraData;
}
