import { InjectionToken } from '@angular/core';

export interface AppConfigInterface {
  GETCARS_ENDPOINT: string;
 
}

export const APP_CONFIG = new InjectionToken('app.config');
export const AppConfig: AppConfigInterface = {
 
  GETCARS_ENDPOINT: 'https://mobiledev.sunovacu.ca/api/Test/GetCars',
  
};
