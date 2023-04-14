import { environment } from '../../environments/environment';

export const API_URL = environment.apiURL
  ? `${environment.apiURL}`
  : `${window.location.origin}`;

export const currentEnviroment = environment.production