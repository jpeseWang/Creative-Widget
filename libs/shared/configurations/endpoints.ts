import { environment } from '../../../apps/host/src/environments/environment';

export const API_URL = environment.apiURL
  ? `${environment.apiURL}`
  : `${window.location.origin}`;
